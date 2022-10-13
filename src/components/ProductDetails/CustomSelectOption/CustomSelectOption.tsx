import { component$, useStylesScoped$, useStore, $ } from '@builder.io/qwik';
import styles from './custom-select-option.sass';
export default component$(() => {
    useStylesScoped$(styles);
    const store = useStore({
        input: "" as string,
        options: ['1 Month', '3 Months', '6 Months', '1 Year'],
        triggered: false
    })

    const searchOption$ = $((e: KeyboardEvent) => {
        const el = e.target as HTMLInputElement
        store.input = el.innerText
    })

    const triggerDropdown$ = $(() => {
        store.triggered = true
    })

    const setOption$ = $((e: Event) => {
        const el = e.target as HTMLInputElement
        const optionSelected = el.getAttribute('data-value')
        //@ts-ignore
        store.input = optionSelected
        el.innerHTML = store.input
    })
    return (
        <div class={store.triggered ? `custom-select-wrapper triggered` : `custom-select-wrapper`} onClick$={triggerDropdown$}>
            <div onInput$={searchOption$} data-selected={store.input} class={store.input.length > 0 ? 'custom-select-input typed' : 'custom-select-input'} contentEditable='true' placeholder='Duration'>

            </div>

            <div class="options-list">{
                store.options.map(option => (
                    <div data-value={option} onClick$={setOption$}>
                        {option}
                    </div>
                ))
            }</div>
        </div>
    );
});
