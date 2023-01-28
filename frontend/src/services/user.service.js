import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"
import { socketService } from "./socket.service"

export const userService = {
    login,
    signup,
    getEmptyCredentials,
    getById,
    logout,

}

async function logout() {
    // sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    return user
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) {
        socketService.login(user._id)
        return user
    }
    else throw new Error
}


async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
    const user = await httpService.post('auth/signup', userCred)
    return user
}

function getEmptyCredentials() {
    return {
        fullname: '',
        username: '',
        password: '',
    }
}