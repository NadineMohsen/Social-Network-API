const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteSingleThought,
    // updateSingleThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).delete(deleteSingleThought)
// .put(updateSingleThought)

module.exports = router;