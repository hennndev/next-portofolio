import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MenuAlt3Icon, HomeIcon, AcademicCapIcon } from '@heroicons/react/outline'

const Navbar = ({toggleTheme, darkTheme}) => {

    const [isSide, setIsSide] = useState(false)

    const handleSidebar = () => setIsSide(!isSide)

    const router = useRouter()

    const handleRoute = (url) => {
        setIsSide(false)
        router.push(url)
    }
    return (
        <header className="px-5 py-3 bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200 w-full transition duration-200 ease-in">
            <div className="md:max-w-4xl xl:max-w-6xl md:mx-auto flex items-center justify-between ">
                <h1 className="text-2xl">henndev</h1>

                {/* DESKTOP, IPAD AND MORE++ */}
                <nav className="hidden md:inline">
                    <ul className="flex items-center">
                        <li className="mr-5 text-md cursor-pointer flex items-center" onClick={() => router.push('/')}>
                            <HomeIcon className="h-4 mr-2"/>
                            Home
                        </li>
                        <li className="mr-5 text-md cursor-pointer flex items-center" onClick={() => router.push('/all-courses')}>
                            <AcademicCapIcon className="h-4 mr-2"/>
                            All Courses
                        </li>
                        <li className="mr-5 text-md cursor-pointer" onClick={() => router.push('/all-projects')}>Projects</li>
                    </ul>
                </nav>


                {/* MOBILE */}
                <nav className={`fixed w-full left-0 ${isSide ? 'bottom-0' : '-bottom-full'} right-0 bg-gray-200 dark:bg-gray-700  z-40 p-5 transition duration-200 ease-in border-t border-gray-300 md:hidden`}>
                    <ul className="flex items-center justify-between text-gray-700 dark:text-gray-200">
                        <li className="mr-5 text-md cursor-pointer flex items-center font-medium" onClick={() => handleRoute('/')}>
                            <HomeIcon className="h-4 mr-2"/>
                            Home
                        </li>
                        <li 
                            className="mr-5 text-md cursor-pointer flex items-center font-medium" 
                            onClick={() => handleRoute('/all-courses')}>
                            <AcademicCapIcon className="h-4 mr-2"/>
                            All Courses
                        </li>
                        <li 
                            className="mr-5 text-md cursor-pointer flex items-center font-medium" 
                            onClick={() => handleRoute('/all-projects')}>
                            <AcademicCapIcon className="h-4 mr-2"/>
                            Projects
                        </li>
                    </ul>
                </nav>


                <div className="flex items-center">
                    <button className="bg-gray-700 text-white dark:text-gray-900 dark:bg-gray-200 px-3 py-1 transition duration-200 ease-in" onClick={toggleTheme}>
                        {darkTheme ? 'Light theme 🌞' : 'Dark mode 🌙'}
                    </button>
                    <MenuAlt3Icon className={`block h-6 text-lg z-50 md:hidden ml-3`} onClick={handleSidebar}/>
                </div>
            </div>
        </header>
    )
}

export default Navbar
