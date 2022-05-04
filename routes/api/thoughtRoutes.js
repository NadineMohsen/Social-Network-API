const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteSingleThought,
    updateSingleThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).delete(deleteSingleThought).put(updateSingleThought)
router.route('/:thoughtId/reactions').post(createReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;