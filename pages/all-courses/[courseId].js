import React from 'react'
import Head from 'next/head'
import Wrapper from '../../components/ui/wrapper'
import { useRouter } from 'next/dist/client/router'
import { findCourse } from '../../constants/constants'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'

const CourseDetail = () => {

    const router = useRouter()
    const course = findCourse(+router.query.courseId)

    if(!router.query.courseId) {
        return 'loading...'
    }

    return (
        <Wrapper>
            <Head>
        		<title>Course Detail</title>
        		<meta name="description" content="Generated by create next app" />
        		<link rel="icon" href="/favicon.ico" />
      		</Head>
            
            <div className="flex items-center mb-5 w-max cursor-pointer text-blue-500" onClick={() => router.back()}>
                <ArrowSmLeftIcon class="h-7 mr-1"/>
                <p className="text-lg font-medium uppercase">Get Back</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between">     
                <div className="flex-4 mb-5 md:mr-5 md:mb-0">
                    <img src={`/images/${course.image}`} alt={course.image} className="w-full h-full object-cover"/>
                </div>
                <div className="flex-6">
                    <h1 className="text-3xl md:text-4xl mb-4">{course.title}</h1>
                    <p className="text-xl md:text-2xl mb-2">{course.desc}.</p>
                    <p className="text-md mb-2">Level Course: {course.level}</p>
                    <p className="text-md mb-2">Total Materi: 72 Materi</p>
                    <p className="text-md mb-2">Total Durasi: 20 Jam 30 menit</p>
                    <button className="bg-blue-500 py-3 px-5 rounded cursor-pointer text-gray-100">Enroll Now</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default CourseDetail
