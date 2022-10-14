import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import styles from './search-box.sass'
import SearchIcon from "./SearchIcon";

export default component$(() => {
    useStylesScoped$(styles)

    const toggleMobileSearch = $((e: Event) => {
        if (window.innerWidth < 640) {
            const el = e.target as HTMLDivElement
            el.classList.add('mobile-active')
        }
    })

    const closeMobileSearch = $((e: Event) => {
        if (window.innerWidth < 640) {
            const el = e.target as HTMLDivElement
            el.classList.remove('mobile-active')
        }
    })

    return (
        <>
            <div id="search-box" onClick$={toggleMobileSearch} onMouseLeave$={closeMobileSearch}>
                <SearchIcon />
                <input type="search" id="search-input" />
            </div>
        </>
    )
})