
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const orderService = require('../order/order.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByUsername,
    remove,
    update,
    add,
    updateBayer,
    updateSeller
}

async function updateBayer(addedOrder) {
    try {
        const collection = await dbService.getCollection('user')
        await collection.updateOne({ _id: ObjectId(addedOrder.buyer._id) }, { $push: { purchase: ObjectId(addedOrder._id) } })

    } catch (err) {
        logger.error(`cannot update user ${addedOrder.buyer._id}`, err)
        throw err
    }
}

async function updateSeller(addedOrder) {
    try {
        const collection = await dbService.getCollection('user')
        await collection.updateOne({ _id: ObjectId(addedOrder.seller._id) }, { $push: { order: ObjectId(addedOrder._id) } })
    } catch (err) {
        logger.error(`cannot update user ${addedOrder.buyer._id}`, err)
        throw err
    }
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('user')
        var users = await collection.find(criteria).toArray()
        users = users.map(user => {
            delete user.password
            user.createdAt = ObjectId(user._id).getTimestamp()
            return user
        })
        return users
    } catch (err) {
        logger.error('cannot find users', err)
        throw err
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        let user = await collection.aggregate([
            {
                $match: { _id: ObjectId(userId) }
            },
            {
                $lookup:
                {
                    localField: 'purchase',
                    from: 'order',
                    foreignField: '_id',
                    as: 'purchases'
                }
            },
            {
                $lookup:
                {
                    localField: 'order',
                    from: 'order',
                    foreignField: '_id',
                    as: 'orders'
                }
            },
        ]).toArray()
        return user[0]
    } catch (err) {
        logger.error(`while finding user by id: ${userId}`, err)
        throw err
    }
}

async function getByUsername(username) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username })
        return user
    } catch (err) {
        logger.error(`while finding user by username: ${username}`, err)
        throw err
    }
}
// remove('63d248c3ffc84864e2195c61')
async function remove(userId) {
    try {
        const collection = await dbService.getCollection('user')
        await collection.deleteOne({ _id: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove user ${userId}`, err)
        throw err
    }
}

async function update(user) {
    try {
        // peek only updatable properties
        const userToSave = {
            _id: ObjectId(user._id),
            fullname: user.fullname,
            score: user.score,
        }
        const collection = await dbService.getCollection('user')
        await collection.updateOne({ _id: userToSave._id }, { $set: userToSave })
        return userToSave
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}

async function add(user) {
    try {
        // peek only updatable fields!
        const userToAdd = {
            username: user.username,
            password: user.password,
            fullname: user.fullname,
            imgUrl: user.imgUrl
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('cannot add user', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                username: txtCriteria
            },
            {
                fullname: txtCriteria
            }
        ]
    }
    if (filterBy.minBalance) {
        criteria.score = { $gte: filterBy.minBalance }
    }
    return criteria
}




