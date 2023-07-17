const Router = require('express')
const router = new Router()
const aboutController = require('../controllers/aboutController')

router.get('/', aboutController.getAboutText)

module.exports = router