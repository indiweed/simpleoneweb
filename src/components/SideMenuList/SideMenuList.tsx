import './SideMenuList.scss';
import Image from 'next/image';
import DropMenu from '@/images/sidemenu_drop.svg';

export default function SideMenuList() {
    return (
            <ul className="ul_list">
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Моя работа</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Структура портала</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Личное расписание</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Отсутствие на рабочем месте</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Портфель услуг</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Дашборды</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Доски задач</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Обращения</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>События</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Инциденты</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Проблемы</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Настройка каталогов
                    </span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Запросы на обслуживание</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Запросы на изменение</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Управление конфигурациями</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Управление уровнем услуг</span>
                </li>
                <li className='list_item'>
                    <button>
                        <Image
                        src={DropMenu}
                        width={16}
                        height={16}
                        alt='Раскрыть'
                        />
                    </button>
                    <span>Настройка соответствий</span>
                </li>
            </ul>
    )
}