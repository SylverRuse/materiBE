const helper = require("../helper")

const middleware = {}

middleware.validasiPassword = (req, res, next)=>{
    try {
        const {password, verifikasiPassword} = req.body
        if(password.length < 8 || verifikasiPassword < 8){
            return res.status(400).json({message : "Password kurang dari 8 karakter!"})
        }
        
    } catch(error) {
        helper.controllerErrorHandler(error,res)
    }
}

module.exports = middleware