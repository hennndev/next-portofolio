import React from 'react'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Project = ({imgSrc, url, title, desc}) => {

    return (
        <div className="h-cardProject shadow-lg rounded overflow-hidden bg-gray-200 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 relative transition duration-200 ease-in">
            <div className="h-image w-full">
                <img src={`images/${imgSrc}`} className="w-full h-full" />   
            </div>
            <div className="px-3 py-2">
                <h3 className="mt-1 text-xl font-bold">{title}</h3>
                <p className=" text-lg text-gray-600 dark:text-gray-300">{desc}</p>
                <div className="flex items-center justify-between absolute bottom-2 left-2">
                    <a href={url} target="_blank" rel="noreferrer" className="flex items-center text-md text-blue-500">
                        <ArrowSmRightIcon className="h-6 mr-1"/>
                        View Result
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
