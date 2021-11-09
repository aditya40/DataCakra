const router = require('express').Router();
const testCaseControllers = require('../controllers/testcase')

router.post('/waysum', testCaseControllers.waySum)
router.post('/maxmin', testCaseControllers.maxMin)

module.exports = router;