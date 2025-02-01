import './ModalWindow.scss';
import FormList from '../FormList/FormList';
import useBodyScroll from '@/hooks/useBodyScroll';
import useModalClose from '@/hooks/useModalClose';
import Image from 'next/image';
import Close from '@/images/delete_icon.svg';

interface ModalWindow_props {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalWindow({isOpen, onClose}: ModalWindow_props) {
    useBodyScroll(isOpen);
    const modalRef = useModalClose(isOpen, onClose);

    if (!isOpen) return null
    
    return (
        <div className='modal_window'>
            <div className='modal_window_container' ref={modalRef}>
                <div className='modal_window_header'>
                    <h1 className='modal_window_header_title'>
                        Подзадача
                    </h1>
                    <div className='modal_window_header_right'>
                        <button className='modal_window_save_button'>
                            Сохранить
                        </button>
                        <button onClick={onClose} className='modal_window_cancel_button'>
                            Отменить
                        </button>
                    </div>
                    <button onClick={onClose} className='modal_window_close_btn'>
                        <Image
                        src={Close}
                        width={16}
                        height={16}
                        alt='Закрыть'
                        />
                    </button>
                </div>
                <h1 className='modal_window_title'>
                    Новая запись
                </h1>
                <div className='modal_form_list'>
                    <FormList additionalClass='modal'/>
                </div>
                <div className='modal_buttons_mobile'>
                    <button className='modal_window_save_button'>
                        Сохранить
                    </button>
                    <button onClick={onClose} className='modal_window_cancel_button'>
                        Отменить
                    </button>
                </div>
            </div>
        </div>
    )
}