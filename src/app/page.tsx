'use client';
import Header from "@/components/Header/Header";
import MainMenu from '@/components/MainMenu/MainMenu';
import ModalWindow from "@/components/ModalWindow/ModalWindow";
import './globals.css';
import "./page.module.css";
import useModalOpen from "@/hooks/useModalOpen";
import useSidebarOpen from "@/hooks/useSidebarOpen";

export default function App() {
  const { isModalOpen, toggleModal } = useModalOpen();
  const {toggleSidebar, openClass } = useSidebarOpen();

  return (
    <>
      <Header toggle={toggleSidebar} openClass_sideMenu={openClass}/>
      <MainMenu toggle={toggleSidebar} openClass_sideMenu={openClass} openModal={toggleModal} /> 
      <ModalWindow isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}
