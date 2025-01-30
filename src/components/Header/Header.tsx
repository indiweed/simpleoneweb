import './Header.scss';
import Header_Mobile from '../Header_Mobile/Header_Mobile';
import Header_Desktop from '../Header_Desktop/Header_Desktop';

interface Header_props {
    toggle: () => void;
    openClass_sideMenu: string;
}

export default function Header({toggle, openClass_sideMenu}: Header_props) {

    return (
        <>
        <Header_Desktop />
        <Header_Mobile toggle={toggle} openClass={openClass_sideMenu}/>
        </>
    )
}