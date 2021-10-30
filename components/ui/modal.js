import React from 'react'

const Modal = ({children}) => {
    return (
        <div className="fixed bg-overlay w-full h-full z-20 left-0 top-0 grid place-items-center">
            <div className="w-mobile-modal h-modal lg:w-modal bg-gray-100 dark:bg-gray-800 p-5 rounded relative">
                {children}
            </div>
        </div>
    )
}

export default Modal
