const router = require('express').Router();
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateSingleThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateSingleThought)

module.exports = router;