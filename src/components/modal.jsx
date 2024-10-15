import React, { useEffect, useCallback } from 'react';

const Modal = ({ isOpen, close, children }) => {
  
  const handleClickOutside = useCallback((event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      close();
    }
  }, [close]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      close();
    }
  }, [close]); 

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]); 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center modal-backdrop">
      <div className="bg-white rounded-xl shadow-xl m-4 max-w-7xl max-h-fit w-full">
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
