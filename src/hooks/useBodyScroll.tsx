import { useEffect } from 'react';

const useBodyScroll = (isOpen: boolean) => {
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (isOpen) {
            document.body.classList.add('no-scroll');
            console.log(scrollbarWidth)
            document.body.style.paddingRight = `${scrollbarWidth}px`
            const header = document.querySelector('.header');
            const main = document.querySelector('.main');
            const header_form = document.querySelector('.main_edit_container');
            const form_message = document.querySelector('.main_message');
            if (main && header && header_form && form_message) {
                main.classList.add('no-scroll'); 
                header.classList.add('no-scroll'); 
                header_form.classList.add('no-scroll')
                form_message.classList.add('no-scroll')
            }
        } else {
            document.body.classList.remove('no-scroll');
            document.body.style.paddingRight = ``
            const header = document.querySelector('.header');
            const main = document.querySelector('.main');
            const header_form = document.querySelector('.main_edit_container');
            const form_message = document.querySelector('.main_message')
            if (main && header && header_form && form_message) {
                main.classList.remove('no-scroll'); 
                header.classList.remove('no-scroll'); 
                header_form.classList.remove('no-scroll');
                form_message.classList.remove('no-scroll')
            }
        }
        
        return () => {
            document.body.classList.remove('no-scroll');
            document.body.style.paddingRight = ``
            const header = document.querySelector('.header');
            const main = document.querySelector('.main');
            const header_form = document.querySelector('.main_edit_container');
            const form_message = document.querySelector('.main_message')
            if (main && header && header_form && form_message) {
                main.classList.remove('no-scroll'); 
                header.classList.remove('no-scroll'); 
                header_form.classList.remove('no-scroll');
                form_message.classList.remove('no-scroll')
            }
        };
    }, [isOpen]);
};

export default useBodyScroll;
