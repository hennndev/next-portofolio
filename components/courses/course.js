import React from 'react'

const Course = ({image, category, title, level, desc, clicked}) => {

    return (
        <div className="h-card shadow-lg rounded overflow-hidden bg-gray-200 text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 relative transition duration-200 ease-in cursor-pointer transform hover:-translate-y-1" onClick={clicked}>
            <div className="h-image w-full">
                <img src={`/images/${image}`} alt={image} className="w-full h-full" />   
            </div>
            <div className="px-3 py-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{category}</p>
                    <p className="text-sm text-gray-500">{level}</p>
                </div>
                <h3 className="mt-1 text-lg font-bold">{title}</h3>
                <p className=" text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                <div className="flex items-center justify-between absolute bottom-2 left-2 right-2 text-gray-500  dark:text-gray-400 text-sm">
                    <p> 60 Materi</p>
                    <p>⏱ 10 hrs 30 mins</p>
                </div>
            </div>
        </div>
    )
}

export default Course
