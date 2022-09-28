const controllerget = (req, res) => {
    console.log(req.params)
    console.log(req.query)
    
    res.send({
        mensaje: `Este es el id ${req.params.productid}`
    })
}

const controllerpost = (req, res) => {
    console.log(res.body)

    res.send({
        data: req.body
    })
}

module.exports = {
    controllerget,
    controllerpost
}