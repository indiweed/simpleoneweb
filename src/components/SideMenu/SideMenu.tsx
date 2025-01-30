import './SideMenu.scss';
import Image from 'next/image';
import SearchInput from '../SearchInput/SearchInput';
import NoPin from '@/images/no-pin.svg'
import SideMenuList from '../SideMenuList/SideMenuList';

interface SideMenuProps {
    openClass_sideMenu: string;
}

export default function SideMenu({openClass_sideMenu}: SideMenuProps) {
    return (
        <div className={`sidemenu ${openClass_sideMenu}`}>
            <div className='sidemenu_search_container'>
                <div className='sidemenu_search'>
                    <SearchInput placeholder='Поиск по меню' additionalClass='filter'/>
                    <button className='sidemenu_no_pin'>
                        <Image
                        src={NoPin}
                        width={20}
                        height={20}
                        alt='Открепить'
                        />
                    </button>
                </div>
            </div>
            <div className='sidemenu_list_container'>
                <SideMenuList />
            </div>
        </div>
    )
}