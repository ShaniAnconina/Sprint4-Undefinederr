const logger = require('./logger.service')

var gIo = null

function setupSocketAPI(http) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        }
    })

    gIo.on('connection', socket => {
        logger.info(`New connected socket [id: ${socket.id}]`)

        socket.on('disconnect', socket => {
            logger.info(`Socket disconnected [id: ${socket.id}]`)
        })


        socket.on('set-user-socket', userId => {
            logger.info(`Setting socket.userId = ${userId} for socket [id: ${socket.id}]`)
            socket.userId = userId
            gIo.emit('first-event', `This is my first test ${socket.userId}`) //
        })

        socket.on('unset-user-socket', () => {
            logger.info(`Removing socket.userId for socket [id: ${socket.id}]`)
            delete socket.userId
        })

        socket.on('new-order', sellerId => {
            console.log('gIo:', gIo.sockets)
            _getUserSocket(sellerId)
            // logger.info(`user-watch from socket [id: ${socket.id}], on user ${userId}`)
            // socket.join('watching:' + userId)
            gIo.to(_getUserSocket(sellerId)).emit('ON_INCOMING_ORDER', 'You have a new order!')
            // emitToUser({ type: 'ON_INCOMING_ORDER', data: 'New order has been accepted', userId: sellerId })
            // gIo.to(socket.sellerId).emit('ON_INCOMING_ORDER', 'New order has been accepted')
            // socket.emit('new-order', sellerId)
        })
    })
}

function emitTo({ type, data, label }) {
    if (label) gIo.to('watching:' + label.toString()).emit(type, data)
    else gIo.emit(type, data)
}

async function emitToUser({ type, data, userId }) {
    userId = userId.toString()
    const socket = await _getUserSocket(userId)

    if (socket) {
        logger.info(`Emiting event: ${type} to user: ${userId} socket [id: ${socket.id}]`)
        socket.emit(type, data)
    } else {
        logger.info(`No active socket for user: ${userId}`)
    }
}

async function _getUserSocket(userId) {
    const sockets = await _getAllSockets()
    const socket = sockets.find(s => s.userId === userId)
    return socket
}

async function _getAllSockets() {
    // return all Socket instances
    const sockets = await gIo.fetchSockets()
    return sockets
}

module.exports = {
    setupSocketAPI,
    emitToUser,
}
