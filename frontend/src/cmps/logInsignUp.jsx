import { useEffect, useState } from "react"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { userService } from "../services/user.service"
import { login, signup } from "../store/gig/user/user.action"

export function LoginSignUp({ status, setOpenModal }) {
    const [isLogin, setIsLogin] = useState(null)
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())

    useEffect(() => {
        if (status === 'login') setIsLogin(true)
        else setIsLogin(false)
    }, [])

    function onToggleLogInStatus() {
        setIsLogin(!isLogin)
    }
    function handelChange({ target }) {
        const { name: field, value } = target
        setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
    }

    async function onSubmit(ev) {
        ev.preventDefault()
        try {
            const func = isLogin ? login : signup
            await func(credentials)
        } catch (err) {
            console.log(err)
            showErrorMsg('Had issues please try again...')
        }
        finally {
            setCredentials(userService.getEmptyCredentials())
            setOpenModal(null)
        }
    }

    const passwordPlaceHolder = isLogin ? 'Password' : 'Choose a Password'
    const usernamePlaceHolder = isLogin ? 'Email / Username' : 'Choose a Username'

    return <section className="logIn-signUp-screen flex column">

        <div className="logIn-signUp-container">

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
                    onChange={handelChange}
                // required
                />

                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder={passwordPlaceHolder}
                    onChange={handelChange}
                // required
                />

                {!isLogin && <input
                    type="text"
                    name="fullname"
                    value={credentials.fullname}
                    placeholder="Full name"
                    onChange={handelChange}
                // required
                />}

                <button>{isLogin ? 'Continue' : 'Join'}</button>
            </form>
        </div>

        <footer>
            {isLogin && <span>Not a member yet? <button onClick={onToggleLogInStatus}>Join now</button></span>}
            {!isLogin && <span>Already a member? <button onClick={onToggleLogInStatus}>Sign In</button></span>}
        </footer>
    </section>

}