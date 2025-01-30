import './Sidebar.scss';
import Image from 'next/image';
import Favorites from '@/images/favorites.svg';
import SideMenu from '../SideMenu/SideMenu';
import SideMenu_button from '../SideMenu_button/SideMenu_button';

interface Sidebar_props {
    openClass_sideMenu: string;
    toggle: () => void;
}

export default function Sidebar({openClass_sideMenu, toggle}: Sidebar_props) {
    
    return (
        <>
            <aside className='sidebar'>
                <div className='sidebar_container'>
                    <SideMenu_button openClass_sideMenu={openClass_sideMenu} toggle={toggle}/>
                    <button className='favorites_menu'>
                        <Image
                        src={Favorites}
                        width={24}
                        height={24}
                        alt='Избранное'
                        />
                    </button>
                </div>
            </aside>
            <SideMenu openClass_sideMenu = {openClass_sideMenu}/>
        </>
    )
}