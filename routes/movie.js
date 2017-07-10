const router = require('express').Router()
const movieController = require('../controllers/movieController');

router.get('/',movieController.getAll)
router.post('/',movieController.create)
// router.get('/tags',movieController.getTags)
// router.post('/tags',movieController.createTag)
// // router.get('/destroyMovies',movieController.deleteMovies)
// // router.get('/destroyTags',movieController.deleteTags)

module.exports = router;