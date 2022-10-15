import { component$, useStore, $, useStylesScoped$ } from "@builder.io/qwik";
import styles from './login.sass'
import LoginIcon from "./LoginIcon";
export default component$(() => {
    useStylesScoped$(styles)

    const store = useStore({
        login: "",
        password: ""
    })

    const submitLogin = $(async (store: any) => {
        await console.log('submitting')
        console.log(store.login)
        console.log(store.password)
    })

    return (
        <div id="login">
            <div id="login-form">
                <label>
                    <input type="text" value={store.login} placeholder="Username / Email" />
                </label>
                <label>
                    <input type="password" value={store.password} placeholder="Password" />
                </label>
                <button onClick$={submitLogin} class="auth-btn">
                    Login
                </button>
            </div>
            <div id="illustrator">
                <LoginIcon />
            </div>
        </div>
    )
})