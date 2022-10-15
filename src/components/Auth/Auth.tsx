import { component$, useStore, $, useStyles$ } from "@builder.io/qwik";
import styles from './auth.sass'
import Login from "./Login/Login";
import Register from "./Register/Register";

export default component$(() => {
    useStyles$(styles)

    const store = useStore({
        register: false,
        login: true
    })

    const register = $(() => {
        store.register = true
        store.login = false
    })

    const login = $(() => {
        store.register = false
        store.login = true
    })

    const closeAuthModal = $((e: Event) => {
        const el = e.target as HTMLButtonElement
        const authModal = el.closest('#auth-modal') as HTMLDivElement
        authModal.classList.remove('active')
    })

    return (
        <div id="auth-modal">
            <button onClick$={closeAuthModal} id="close-auth">Close</button>
            <div id="auth-options">
                <button onClick$={register} class={store.register ? 'active' : ''}>
                    Register
                </button>
                <button onClick$={login} class={store.login ? 'active' : ''}>
                    Login
                </button>
            </div>
            {store.register ? <Register /> : <Login />}
        </div>
    )
})