import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile('index.html');
  // res.send(`Hello stranger, it's been a while. Go to http://localhost:3001/docs`);
});

export default router;
