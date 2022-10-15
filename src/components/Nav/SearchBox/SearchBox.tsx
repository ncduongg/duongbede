import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from './search-box.sass'
import SearchIcon from "./SearchIcon";

export default component$(() => {
    useStylesScoped$(styles)

    const route = useLocation()

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

    const search = $((e: KeyboardEvent) => {
        const el = e.target as HTMLInputElement
        const value = el.value
        const keycap = e.code as String
        if (keycap === "Enter")  window.location.replace(`/search/${value}`)
})

return (
    <>
        <div id="search-box" onClick$={toggleMobileSearch} onMouseLeave$={closeMobileSearch}>
            <SearchIcon />
            <input onKeyUp$={search} type="search" id="search-input" placeholder="Type something to search...." />
        </div>
    </>
)
})