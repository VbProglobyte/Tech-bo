const router = require('express').Router();
const path = require('path');
// ///////////////////////////////////////////////////////////////          HOME
router.get('/', (req, res) => { // path to index.html
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
// ///////////////////////////////////////////////////////////////          EXERCISE
router.get('/exercise', (req, res) => { // path to exercise.html
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})
// ///////////////////////////////////////////////////////////////          STATS
router.get('/stats', (req, res) => { // path to stats.html
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router;