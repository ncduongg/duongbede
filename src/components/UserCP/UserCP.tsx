import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './usercp.sass'
import UserCPLayout from '~/layouts/UserCPLayout';
export default component$(() => {
    useStyles$(styles)
    return (
        <UserCPLayout>
        <div id="user-edit-form">
            <div id="change-password-form">
                <label>
                    <input type="password" value="" placeholder="New Password" />
                </label>
                <label>
                    <input type="password" value="" placeholder="New Password Confirm" />
                </label>

            </div>
            <div id="password-criteria">
                <strong>Password Citeria</strong>
                <ul>
                    <li>
                        Password length &gt; 7 characters
                    </li>
                    <li>
                        Contains at least 1 number and 1 uppercase letter
                    </li>
                </ul>
            </div>
        </div>
    </UserCPLayout>
    );
});