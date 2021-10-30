import React from 'react'

const Modal = ({handleSubmit, handleClose, children}) => {
    return (
        <div className="fixed bg-overlay w-full h-full z-20 left-0 top-0 grid place-items-center">
            <div className="w-mobile-modal h-modal lg:w-modal bg-gray-100 dark:bg-gray-800 p-5 rounded relative">
                {children}
                <div className="flex items-center absolute bottom-5 right-5">
                    <button onClick={handleSubmit}
                        className="shadow-md bg-blue-500 py-2 px-4 rounded text-gray-100 dark:bg-blue-600 mr-2">
                        Submit
                    </button>
                    <button 
                        onClick={handleClose} 
                        className="shadow-md bg-gray-500 py-2 px-4 rounded text-gray-200 dark:bg-gray-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
