const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateSingleUser,
    deleteSingleUser,
    addFriend,
    // deleteFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).delete(deleteSingleUser).put(updateSingleUser);
router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;