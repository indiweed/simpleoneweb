import './Header_Mobile.scss';
import Image from 'next/image';
import Avatar from '@/images/Avatar.svg';
import Settings from '@/images/settings.svg';
import SideMenu_button from '../SideMenu_button/SideMenu_button';

interface Header_Mobile_props {
    toggle: () => void;
    openClass: string;
}

export default function Header_Mobile({toggle, openClass}: Header_Mobile_props) {
    return (
        <header className='header header_mobile'>
        <div className='header_container'>
            <SideMenu_button toggle={toggle} openClass_sideMenu={openClass}/>
            <div className='header_flex_menu'>
                <button className='personal_cabinet'>
                    <Image
                    src={Avatar}
                    width={24}
                    height={24}
                    alt='Аватар'
                    />
                </button>
                <button className='header_settings'>
                    <Image
                    src={Settings}
                    width={20}
                    height={20}
                    alt='Настройки'
                    />
                </button>
            </div>
        </div>
    </header>
    )
}