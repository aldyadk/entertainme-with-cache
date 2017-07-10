const router = require('express').Router()
const tvController = require('../controllers/tvController');

router.get('/',tvController.getAll)
router.post('/',tvController.create)

module.exports = router;