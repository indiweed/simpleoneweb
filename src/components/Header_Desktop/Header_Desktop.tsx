import './Header_Desktop.scss';
import Image from 'next/image';
import Logo from '@/images/Logo.svg';
import SearchInput from '../SearchInput/SearchInput';
import Avatar from '@/images/Avatar.svg';
import Settings from '@/images/settings.svg';

export default function Header_Desktop() {
    return (
        <header className='header header_desktop'>
            <div className='header_container'>
                <Image
                src={Logo}
                width={174}
                height={24}
                alt='Логотип'
                id='logo'
                />
                <div className='header_flex_menu'>
                    <SearchInput placeholder='Поиск' additionalClass='search'/>
                    <button className='personal_cabinet'>
                        <Image
                        src={Avatar}
                        width={32}
                        height={32}
                        alt='Аватар'
                        />
                        <span id='user_name'>Максим Галактионов</span>
                    </button>
                    <button className='header_settings'>
                        <Image
                        src={Settings}
                        width={20}
                        height={20}
                        width={18}
                        height={18}
                        alt='Настройки'
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}