const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
var gigs = require('../../data/gig.json')
const fs = require('fs')

const ObjectId = require('mongodb').ObjectId

// async function query(filterBy={txt:''}) {
//     try {
//         const criteria = {
//             vendor: { $regex: filterBy.txt, $options: 'i' }
//         }
//         const collection = await dbService.getCollection('gig')
//         var gigs = await collection.find(criteria).toArray()
//         return gigs
//     } catch (err) {
//         logger.error('cannot find gigs', err)
//         throw err
//     }
// }

// async function getById(gigId) {
//     try {
//         const collection = await dbService.getCollection('gig')
//         const gig = collection.findOne({ _id: ObjectId(gigId) })
//         return gig
//     } catch (err) {
//         logger.error(`while finding gig ${gigId}`, err)
//         throw err
//     }
// }

// async function remove(gigId) {
//     try {
//         const collection = await dbService.getCollection('gig')
//         await collection.deleteOne({ _id: ObjectId(gigId) })
//         return gigId
//     } catch (err) {
//         logger.error(`cannot remove gig ${gigId}`, err)
//         throw err
//     }
// }

// async function add(gig) {
//     try {
//         const collection = await dbService.getCollection('gig')
//         await collection.insertOne(gig)
//         return gig
//     } catch (err) {
//         logger.error('cannot insert gig', err)
//         throw err
//     }
// }

// async function update(gig) {
//     try {
//         const gigToSave = {
//             vendor: gig.vendor,
//             price: gig.price
//         }
//         const collection = await dbService.getCollection('gig')
//         await collection.updateOne({ _id: ObjectId(gig._id) }, { $set: gigToSave })
//         return gig
//     } catch (err) {
//         logger.error(`cannot update gig ${gigId}`, err)
//         throw err
//     }
// }

async function addGigMsg(gigId, msg) {
    try {
        msg.id = utilService.makeId()
        const collection = await dbService.getCollection('gig')
        await collection.updateOne({ _id: ObjectId(gigId) }, { $push: { msgs: msg } })
        return msg
    } catch (err) {
        logger.error(`cannot add gig msg ${gigId}`, err)
        throw err
    }
}

async function removeGigMsg(gigId, msgId) {
    try {
        const collection = await dbService.getCollection('gig')
        await collection.updateOne({ _id: ObjectId(gigId) }, { $pull: { msgs: {id: msgId} } })
        return msgId
    } catch (err) {
        logger.error(`cannot add gig msg ${gigId}`, err)
        throw err
    }
}

function query(filterBy, sortBy) {
    return Promise.resolve(gigs)
}

function getById(gigId) {
    const gig = gigs.find(gig => gig._id === gigId)
    if (!gig) return Promise.reject('Gig not found')
    return Promise.resolve(gig)
}

function remove(gigId) {
    const idx = gigs.findIndex(gig => gig._id === gigId)
    if (idx === -1) return Promise.reject('No such gig')
    gigs.splice(idx, 1)
    return _writeGigsToFile()
}

function save(gig) {
    if (gig._id) {
        const gigToUpdate = gigs.find(currGig => currGig._id === gig._id)
        gigToUpdate.title = gig.title
        gigToUpdate.price = +gig.price
    } else {
        gig._id = _makeId()
        gigs.push(gig)
    }
    return _writeGigsToFile().then(() => gig)
}

function _writeGigsToFile() {
    return new Promise((res, rej) => {
        const data = JSON.stringify(gigs, null, 2)
        fs.writeFile('data/gig.json', data, (err) => {
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
    addGigMsg,
    removeGigMsg,
    save
}
