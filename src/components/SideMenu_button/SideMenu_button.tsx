import './SideMenu_button.scss';
import Image from 'next/image';;
import SideBar_Menu from '@/images/sidebar.svg';
import SideBar_Menu_Clicked from '@/images/sidebar_onclick.svg';

interface SideMenuButton_props {
    openClass_sideMenu: string;
    toggle: () => void;
}


export default function SideMenu_button({openClass_sideMenu, toggle}: SideMenuButton_props) {

    const sidemenu_Image = openClass_sideMenu === 'open' ? SideBar_Menu_Clicked : SideBar_Menu;

    return (
        <button onClick={toggle} className='side_menu'>
            <Image
            src={sidemenu_Image}
            width={24}
            height={24}
            alt='Меню'
            className={`sidemenu_icon ${openClass_sideMenu}`}
            />
        </button>
    )
}