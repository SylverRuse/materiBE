const service = {}

service.panggilNama = (nama, lastname, middlename) => {
    try {
        return `Halo ${nama} ${middlename} ${lastname}`;
    } catch(error) {
        throw error;
    }
}

service.validasiPassword = (password, verifikasiPassword) => {
    try {
        if( password === verifikasiPassword) {
            return true
        }
        else{
            return false
        }
    } catch(error) {
        throw error
    }
}

module.exports = service