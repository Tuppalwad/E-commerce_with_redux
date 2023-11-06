import Api from "./Api";



export  function checklogin(data) {
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


export function setaddress(data) {
    return Api.post('/setaddress', data)
}

export function updateaddress(data) {
    return Api.post('/updateaddress', data)
}

export function getaddress(data) {
    return Api.post('/getaddress', data)
}
export function deleteaddress(data) {
    return Api.post('/deleteaddress', data)
}

export function contactForm(data) {
    return Api.post('/contactform', data)
}