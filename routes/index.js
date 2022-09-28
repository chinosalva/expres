const { Router } = require('express')
const router = Router()
const { controllerget, controllerpost } = ('../controllers')


router.get('/products/:productid', controllerget)
router.get('/products', controllerpost)



module.exports = router