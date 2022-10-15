import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './register.sass'
export default component$(() => {
    useStylesScoped$(styles)
    return (
        <div id="register">
            <label>
                <input type="text" placeholder="Username" />
            </label>
            <label>
                <input type="text" placeholder="Email" />
            </label>
            <label>
                <input type="password" placeholder="Password" />
            </label>
            <label>
                <input type="password" placeholder="Password Confirm" />
            </label>
            <button class="auth-btn">
                Register
            </button>
        </div>
    )
})