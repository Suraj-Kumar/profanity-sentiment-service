import express from 'express';
import profanityRoutes from './profanityFilter.routes';
import sentimentRoute from './sentiment.routes';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

router.use("/profanity", profanityRoutes);

router.use("/sentiment-score", sentimentRoute);


export default router;
