import React from 'react'
import Course from './course'
import { useRouter } from 'next/router'

const Courses = ({courses}) => {

    const router = useRouter()

    return (
        <div className="mt-7 grid grid-cols-autoFill gap-7">
            {courses.length > 0 ? courses.map(course => (
                <Course 
                    key={course.id}
                    image={course.image}
                    category={course.category}
                    title={course.title}
                    level={course.level}
                    duration={course.duration}
                    lessons={course.lessons}
                    desc={course.desc.split(' ').length > 12 ? `${course.desc.split(' ').slice(0, 10).join(' ')}...` : course.desc}
                    clicked={() => router.push(`/all-courses/${course.id}`)}/>
            )) : (
                <div>
                    <h1 className="text-2xl mb-5">Maaf courses yang kamu cari belum tersedia.</h1>
                </div>
            )}
        </div>
    )
}

export default Courses
