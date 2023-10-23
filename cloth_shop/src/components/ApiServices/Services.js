import Api from "./Api";



export function checklogin(data) {
    return Api.post('/isloggedin', data)
}

export function logout(data) {
    return Api.post('/logout', data)
}


export function sendSMS(data) {
    console.log(data)
    return Api.post('/sendsms', data)
}

export function verifySMS(data) {
    return Api.post('/verifysms', data)
}