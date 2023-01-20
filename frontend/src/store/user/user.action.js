import { userService } from "../../services/user.service"
import { store } from "../store"
import { SET_USER } from "./user.reducer"

export async function login(credentials) {
    try {
        const loggedinUser = await userService.login(credentials)
        store.dispatch({ type: SET_USER, loggedinUser })
        return loggedinUser
    } catch (err) {
        console.error('Cannot login:', err)
        throw err
    }
}

export async function signup(credentials) {
    try {
        const loggedinUser = await userService.signup(credentials)
        store.dispatch({ type: SET_USER, loggedinUser })
        return loggedinUser
    } catch (err) {
        console.error('Cannot signup:', err)
        throw err
    }
}

export function logOut() {
    store.dispatch({ type: SET_USER, loggedinUser: null })
}

