import { storageService } from "./async-storage.service"

export const userService = {
    login,
    signup,
    getEmptyCredentials,
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    if (user) {
        return user 
    }
    else throw new Error
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
    const user = await storageService.post('user', userCred)
    return user
}

function getEmptyCredentials() {
    return {
        fullname: '',
        username: '',
        password: '',
    }
}