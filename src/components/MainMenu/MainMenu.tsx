import './MainMenu.scss'
import MainMenu_Edit from "../MainMenu_Edit/MainMenu_Edit";
import MainMenu_Form from "../MainMenu_Form/MainMenu_Form";
import Sidebar from '../Sidebar/Sidebar';

interface MainMenu_props {
    openModal: () => void;
    toggle: () => void;
    openClass_sideMenu: string;
}

export default function MainMenu({openModal, toggle, openClass_sideMenu}: MainMenu_props) {


    return (
        <>
            <Sidebar openClass_sideMenu = {openClass_sideMenu} toggle = {toggle}/>
            <main className={`main ${openClass_sideMenu}`}>
                <div className='main_container'>
                    <MainMenu_Edit openModal = {openModal} openClass_sideMenu = {openClass_sideMenu}/>
                    <h1 className="main_message">STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller</h1>
                    <MainMenu_Form />
                </div>
            </main>
        </>
    )
}