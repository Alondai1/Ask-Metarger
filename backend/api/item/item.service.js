
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId



async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('item')
    try {
        var items = await collection.find(criteria).toArray()

    
        return items
    } catch (err) {
        console.log('ERROR: cannot find items')
        throw err;
    }
}




async function remove(itemId) {
    const collection = await dbService.getCollection('item')
    try {
        await collection.deleteOne({ "_id": ObjectId(itemId) })
    } catch (err) {
        console.log(`ERROR: cannot remove item ${itemId}`)
        throw err;
    }
}


async function add(item) {
    item.byUserId = ObjectId(item.byUserId);
    item.aboutUserId = ObjectId(item.aboutUserId);

    const collection = await dbService.getCollection('item')
    try {
        await collection.insertOne(item);
        return item;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    return criteria;
}

module.exports = {
    query,
    remove,
    add
}




// async function query(filterBy = {}) {
//     // const criteria = _buildCriteria(filterBy)
//     const collection = await dbService.getCollection('item')
//     try {
//         // const items = await collection.find(criteria).toArray();
//         var items = await collection.aggregate([
//             {
//                 $match: filterBy
//             },
//             {
//                 $lookup:
//                 {
//                     from: 'user',
//                     localField: 'byUserId',
//                     foreignField: '_id',
//                     as: 'byUser'
//                 }
//             },
//             {
//                 $unwind: '$byUser'
//             },
//             {
//                 $lookup:
//                 {
//                     from: 'user',
//                     localField: 'aboutUserId',
//                     foreignField: '_id',
//                     as: 'aboutUser'
//                 }
//             },
//             {
//                 $unwind: '$aboutUser'
//             }
//         ]).toArray()

//         items = items.map(item => {
//             item.byUser = { _id: item.byUser._id, username: item.byUser.username }
//             item.aboutUser = { _id: item.aboutUser._id, username: item.aboutUser.username }
//             delete item.byUserId;
//             delete item.aboutUserId;
//             return item;
//         })

//         return items
//     } catch (err) {
//         console.log('ERROR: cannot find items')
//         throw err;
//     }
// }


