import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import styles from './search-filter.sass'
export default component$(() => {
    useStylesScoped$(styles)

    const hoverFilter = $((e: Event) => {
        const el = e.target as HTMLElement
        el.classList.add('hover')
        el.querySelector('.filter-option')?.classList.add('active')
    })

    const unHoverFilter = $((e: Event) => {
        const el = e.target as HTMLElement
        el.classList.remove('hover')
        el.querySelector('.filter-option')?.classList.remove('active')
    })

    const chooseOption = $((e: Event) => {
        const el = e.target as HTMLElement
        const label = el.closest('.filter-box') as HTMLLabelElement
        const optionsWrapper = el.closest('.filter-option') as HTMLDivElement
        label.classList.remove('hover')
        optionsWrapper.classList.remove('active')
    })

    return (
        <>
            <label class="filter-box" onMouseEnter$={hoverFilter} onMouseLeave$={unHoverFilter}>
                <input type="text" />
                <div class="filter-option">
                    <button onClick$={chooseOption}>
                        Option 1
                    </button>
                    <button onClick$={chooseOption}>
                        Option 2
                    </button>
                </div>
            </label>
        </>
    )
})