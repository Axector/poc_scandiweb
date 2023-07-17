const Router = require('express')
const router = new Router()
const homeRouter = require('./homeRouter')
const aboutRouter = require('./aboutRouter')

router.use('/home', homeRouter)
router.use('/about', aboutRouter)

module.exports = router