import { useEffect, useState } from "react"

import { login, signup } from "../../store/user/user.action.js"
import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service.js"
import { userService } from "../../services/user.service.js"

export function LoginSignUp({ elApp, status, setOpenModal }) {
    const [isLogin, setIsLogin] = useState(null)
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())

    useEffect(() => {
        if (status === 'login') setIsLogin(true)
        else setIsLogin(false)
        disableScroll(true)
    }, [])

    function onToggleLogInStatus() {
        setIsLogin(!isLogin)
    }

    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
    }

    async function onSubmit(ev) {
        ev.preventDefault()
        try {
            if (isLogin){
                login(credentials)
            } else{
                signup(credentials)
            }
            showSuccessMsg(`Welcome back ${credentials.fullname}`)
        } catch (err) {
            showErrorMsg()
        }
        finally {
            setCredentials(userService.getEmptyCredentials())
            setOpenModal(null)
            disableScroll(false)
        }
    }

    function onCloseModal() {
        setOpenModal(null)
        disableScroll(false)
    }

    function disableScroll(status) {
        if (status) {
            elApp.current.style.overflow = 'hidden'
            elApp.current.style.maxHeight = '100vh'
        }
        else {
            elApp.current.style.overflow = 'visible '
            elApp.current.style.maxHeight = 'none'
        }
    }

    const passwordPlaceHolder = isLogin ? 'Password' : 'Choose a Password'
    const usernamePlaceHolder = isLogin ? 'Email / Username' : 'Choose a Username'

    return <section onClick={onCloseModal} className="logIn-signUp-screen flex column">

        <div onClick={(ev) => ev.stopPropagation()} className="logIn-signUp-container">

            <article className="logIn-signUp">
                {isLogin && <h4>Sign In to Fiverr</h4>}
                {!isLogin && <h4>Join Fiverr</h4>}
            </article>

            <form className="login-form grid" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder={usernamePlaceHolder}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder={passwordPlaceHolder}
                    onChange={handleChange}
                />

                {!isLogin && <input
                    type="text"
                    name="fullname"
                    value={credentials.fullname}
                    placeholder="Full name"
                    onChange={handleChange}
                />}
                <button className="btn-continue" >{isLogin ? 'Continue' : 'Join'}</button>
            </form>
        </div>

        <footer onClick={(ev) => ev.stopPropagation()}>
            {isLogin && <div>Not a member yet? <button onClick={onToggleLogInStatus}>Join now</button></div>}
            {!isLogin && <div>Already a member? <button onClick={onToggleLogInStatus}>Sign In</button></div>}
        </footer>
    </section>
}