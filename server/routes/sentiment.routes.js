
import express from 'express';
const router = express.Router(); // eslint-disable-line new-cap
const sentimentController = require("../controllers/sentimentController");

router.route('/')

    /** GET /api/users - Get list of users */
    .post(sentimentController.doSentimentAnalysis);

module.exports = router;