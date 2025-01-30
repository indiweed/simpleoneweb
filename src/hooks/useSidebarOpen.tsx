import { useState } from 'react';

const useSidebarOpen = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return {
    isSidebarOpen,
    toggleSidebar,
    openClass: isSidebarOpen ? 'open' : '',
  };
};

export default useSidebarOpen;
