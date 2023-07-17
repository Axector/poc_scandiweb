const Router = require('express')
const router = new Router()
const homeController = require('../controllers/homeController')

router.get('/', homeController.getHomeText)
router.get('/number', homeController.getRandomNumber)

module.exports = router