const service = require("../service")
const helper = require("../helper")

const controller = {}

controller.panggilNama = (req, res)=> {
    try {
        const fullName = req.body.nama
        console.log(req.body)
        const lastname = req.query.lastName
        console.log(req.query.lastName)
        const middlename = req.params.middleName
        console.log(req.params.middleName)
        const result = service.panggilNama(fullName, lastname, middlename)

        res.status(200).json({
            message: result
        })
    } catch(error) {
        helper.controllerErrorHandler(error, res)
    }
}

controller.registrasi = (req, res) => {
    try {
        const {firstName, lastName, middleName, userName, password, verifikasiPassword} = req.body
        const verificator = service.validasiPassword(password, verifikasiPassword)

        if(!verificator){
            return res.status(400).json({message: 'Password tidak sesuai'})
        }

        res.status(200).json({message: 'Berhasil registrasi'})
    } catch(error) {
        helper.controllerErrorHandler(error, res)
    }
}

module.exports = controller