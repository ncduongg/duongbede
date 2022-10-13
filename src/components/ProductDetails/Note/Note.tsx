import { component$, useStylesScoped$, $, useStore } from '@builder.io/qwik';
import styles from './note.sass';

export default component$(() => {
    useStylesScoped$(styles)

    const store = useStore({
        openNote: false as boolean
    })

    const readNote$ = $(() => {
        store.openNote = !store.openNote
    })

    return (
        <>
            <div id="note" class={store.openNote ? 'expand' : ''}>
                <p>
                    <strong>Quan trọng: Vui lòng KHÔNG THAY ĐỔI thông tin tài khoản,  sẽ không thể bảo hành nếu bạn thay đổi thông tin</strong>
                </p>

                <p>
                    - Hệ thống có thể sẽ thay đổi mật khẩu của bạn vì lý do bảo mật.
                    Trong trường hợp này, xin vui lòng nhắn tin đến bộ phận CSKH
                </p>

                <p>
                    - Hạn sử dụng của sản phẩm KHÔNG cộng dồn khi mua số lượng nhiều sản phẩm.
                </p>

                <p>
                    -Vui lòng không thay đổi mật khẩu và thông tin tài khoản, chỉ sử dụng đúng User được cung cấp.
                    Divine Shop có quyền thu hồi tài khoản trong trường hợp khách hàng sử dụng vi phạm chính sách trên.
                </p>

                <p>
                    - Sản phẩm hiện tại chỉ hỗ trợ xem được tại Việt Nam và vài quốc gia Đông Nam Á.
                </p>

            </div>
            <button id="read-note" onClick$={readNote$} class={store.openNote ? 'reading' : ''}>
                {store.openNote ? 'Đóng lại' : 'Lưu ý (Click để đọc)'}
            </button>

        </>
    )
})