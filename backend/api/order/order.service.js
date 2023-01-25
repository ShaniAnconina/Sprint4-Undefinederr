const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
var orders = require('../../data/order.json')
const fs = require('fs')

const ObjectId = require('mongodb').ObjectId

// async function query(filterBy={txt:''}) {
//     try {
//         const criteria = {
//             vendor: { $regex: filterBy.txt, $options: 'i' }
//         }
//         const collection = await dbService.getCollection('order')
//         var orders = await collection.find(criteria).toArray()
//         return orders
//     } catch (err) {
//         logger.error('cannot find orders', err)
//         throw err
//     }
// }

// async function getById(orderId) {
//     try {
//         const collection = await dbService.getCollection('order')
//         const order = collection.findOne({ _id: ObjectId(orderId) })
//         return order
//     } catch (err) {
//         logger.error(`while finding order ${orderId}`, err)
//         throw err
//     }
// }

// async function remove(orderId) {
//     try {
//         const collection = await dbService.getCollection('order')
//         await collection.deleteOne({ _id: ObjectId(orderId) })
//         return orderId
//     } catch (err) {
//         logger.error(`cannot remove order ${orderId}`, err)
//         throw err
//     }
// }

// async function add(order) {
//     try {
//         const collection = await dbService.getCollection('order')
//         await collection.insertOne(order)
//         return order
//     } catch (err) {
//         logger.error('cannot insert order', err)
//         throw err
//     }
// }

// async function update(order) {
//     try {
//         const orderToSave = {
//             vendor: order.vendor,
//             price: order.price
//         }
//         const collection = await dbService.getCollection('order')
//         await collection.updateOne({ _id: ObjectId(order._id) }, { $set: orderToSave })
//         return order
//     } catch (err) {
//         logger.error(`cannot update order ${orderId}`, err)
//         throw err
//     }
// }

async function addOrderMsg(orderId, msg) {
    try {
        msg.id = utilService.makeId()
        const collection = await dbService.getCollection('order')
        await collection.updateOne({ _id: ObjectId(orderId) }, { $push: { msgs: msg } })
        return msg
    } catch (err) {
        logger.error(`cannot add order msg ${orderId}`, err)
        throw err
    }
}

async function removeOrderMsg(orderId, msgId) {
    try {
        const collection = await dbService.getCollection('order')
        await collection.updateOne({ _id: ObjectId(orderId) }, { $pull: { msgs: {id: msgId} } })
        return msgId
    } catch (err) {
        logger.error(`cannot add order msg ${orderId}`, err)
        throw err
    }
}

function query(filterBy, sortBy) {
    return Promise.resolve(orders)
}

function getById(orderId) {
    const order = orders.find(order => order._id === orderId)
    if (!order) return Promise.reject('Order not found')
    return Promise.resolve(order)
}

function remove(orderId) {
    const idx = orders.findIndex(order => order._id === orderId)
    if (idx === -1) return Promise.reject('No such order')
    orders.splice(idx, 1)
    return _writeOrdersToFile()
}

function save(order) {
    if (order._id) {
        const orderToUpdate = orders.find(currOrder => currOrder._id === order._id)
        orderToUpdate.title = order.title
        orderToUpdate.price = +order.price
    } else {
        order._id = _makeId()
        orders.push(order)
    }
    return _writeOrdersToFile().then(() => order)
}

function _writeOrdersToFile() {
    return new Promise((res, rej) => {
        const data = JSON.stringify(orders, null, 2)
        fs.writeFile('data/order.json', data, (err) => {
            if (err) return rej(err)
            res()
        })
    })
}

function _makeId(length = 5) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

module.exports = {
    remove,
    query,
    getById,
    // add,
    // update,
    addOrderMsg,
    removeOrderMsg,
    save
}
