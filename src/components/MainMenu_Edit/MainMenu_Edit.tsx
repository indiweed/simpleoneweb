import { useState, useEffect } from 'react';
import './MainMenu_Edit.scss';

interface MainMenu_Edit_props {
    openClass_sideMenu: string;
    openModal: () => void;
}

export default function MainMenu_Edit({openClass_sideMenu, openModal}: MainMenu_Edit_props) {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div className={` main_edit main_edit_container ${isScrolled ? 'scrolled' : ''} ${openClass_sideMenu ? 'open' : ''}`} >
            <div className="main_edit_left">
                <span className="main_edit_left_title">Подзадача</span>
                <button onClick={openModal} className="main_edit_left_button">
                    Создать
                </button>                       
            </div>
            <div className="main_edit_right">
                <button className="main_edit_right_save_button">Сохранить</button>
                <button className="main_edit_right_save_exit">Сохранить и выйти</button>
            </div>
        </div>   
        </>
    )
}