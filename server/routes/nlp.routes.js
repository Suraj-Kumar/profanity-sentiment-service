
import express from 'express';
const router = express.Router(); // eslint-disable-line new-cap
const nlpController = require("../controllers/nlpController");

router.route('/')

    /** GET /api/users - Get list of users */
    .post(nlpController.performNLP);

module.exports = router;