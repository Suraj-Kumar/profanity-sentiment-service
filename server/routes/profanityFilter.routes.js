
import express from 'express';
const router = express.Router(); // eslint-disable-line new-cap
const profanityController = require("../controllers/profanityController");

router.route('/')

    /** GET /api/users - Get list of users */
    .post(profanityController.applyProfanityFiltercheck);



    module.exports = router;