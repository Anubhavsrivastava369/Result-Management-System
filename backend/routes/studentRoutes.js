const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const multer = require('multer');
const upload = multer();

router.post('/upload/:category', upload.single('file'), studentController.uploadMarks);
router.get('/results/:studentId', studentController.getResults);

module.exports = router;
