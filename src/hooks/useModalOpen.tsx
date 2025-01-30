import { useState } from 'react';

const useModalOpen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(prev => !prev);
    };

    return {
      isModalOpen,
      toggleModal,
    };
};

export default useModalOpen;