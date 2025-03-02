import React from "react";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  return (
    //background
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors 
        ${isOpen ? "visible bg-black/20" : "invisible"}`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all
        ${isOpen ? "scale-100 opacity-100" : "sale-125 opacity-0"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={onClose}
          className={`size-6 absolute top-2 right-2 text-xl p-1 rounded-lg text-gray-400
            bg-white hover:bg-gray-100 hover:text-gray-600`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        {/* <button
          onClick={onClose}
          className={`absolute top-2 right-2 text-xl p-1 rounded-lg text-gray-400
            bg-white hover:bg-gray-100 hover:text-gray-600`}
        >
          X
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
