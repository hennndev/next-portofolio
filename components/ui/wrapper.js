import React from 'react'

const Wrapper = ({children}) => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200 py-20 px-5 transition duration-200 ease-in">
            <div className="md:max-w-4xl xl:max-w-6xl md:mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Wrapper
