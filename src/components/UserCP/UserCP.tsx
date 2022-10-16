import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './usercp.sass'
import {Link} from '@builder.io/qwik-city'
export default component$(() => {
    useStyles$(styles)
    return (
        <div id="usercp">
            <div id="mini-hero">
                <img src="https://i.imgur.com/tJTTgfT.jpg" />
                <div id="mini-hero-content">
                    User Control Panel
                </div>
            </div>
            <div id="usercp-wrapper">
                <div id="usercp-nav">
                    <ul id="usercp-nav-content">
                        <li>
                            <Link href="/usercp">
                                <span>Change Password</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/usercp/post-product">
                                <span>Selling A Product</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="usercp-content">
                    <div id="user-edit-form">
                        <div id="change-password-form">
                            <label>
                                <input type="password" value="" placeholder="New Password"/>
                            </label>
                            <label>
                                <input type="password" value="" placeholder="New Password Confirm"/>
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
                </div>
            </div>
        </div>
    );
});