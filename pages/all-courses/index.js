import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Modal from '../../components/ui/modal'
import Wrapper from '../../components/ui/wrapper'
import { FilterIcon } from '@heroicons/react/outline'
import Courses from '../../components/courses/courses'
import { categoryCourse, levelCourse, allCourses } from '../../constants/constants'

const AllCourses = () => {

    const [isModal, setIsModal] = useState(false)
    const [valuesFilter, setValuesFilter] = useState({
        category: '',
        level: '',
        duration: ''
    })
    const router = useRouter()

    const openModal = () => setIsModal(true)
    const closeModal = () => {
        setIsModal(false)
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setValuesFilter({
            ...valuesFilter,
            [id]: value
        })
    }
    const handleSubmit = () => {
        let queries = ''
        const updateKeys = Object.keys(valuesFilter).filter(key => valuesFilter[key] !== '')
        updateKeys.forEach((key, idx) => {
            if(updateKeys[idx] === updateKeys.at(-1)) {
                queries += `${key}=${valuesFilter[key]}`
            } else {
                queries += `${key}=${valuesFilter[key]}&`
            }
        })
        if(queries) {
            return router.push(`${router.asPath}/courses/filter?${queries}`)
        } 
    }

    const ctyCourse = categoryCourse()
    const levCourse = levelCourse()

    return (
            <Wrapper>
                <Head>
                    <title>Courses Page</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-3xl">All Courses</h1>
                    <FilterIcon className="h-6 cursor-pointer" onClick={openModal}/>
                </div>
                {isModal && <Modal>
                    <div className="text-gray-900 dark:text-gray-100">
                        
                        {/* CATEGORY */}
                        <div className="flex flex-col mb-3">
                            <label className="mb-2" htmlFor="category">Category</label>
                            <select 
                                id="category" 
                                value={valuesFilter.category} 
                                onChange={handleChange} 
                                className="py-1 px-3 bg-transparent border border-gray-500 rounded">
                                <option value="" className="text-gray-800">Select Category</option>
                                {ctyCourse.map(cty => (
                                    <option value={cty} key={cty} className="text-gray-800">{cty}</option>
                                ))}
                            </select>
                        </div>

                        {/* LEVEL */}
                        <div className="flex flex-col mb-3">
                            <label className="mb-2">Level</label>
                            <select 
                                id="level" 
                                value={valuesFilter.level} 
                                onChange={handleChange} 
                                className="py-1 px-3 bg-transparent border border-gray-500 rounded">
                                <option value="" className="text-gray-800">Select your level</option>
                                {levCourse.map(level => (
                                    <option value={level} className="text-gray-800" key={level}>{level}</option>
                                ))}
                            </select>
                        </div>

                        {/* DURATION */}
                        <div className="flex flex-col mb-3">
                            <label className="mb-2" htmlFor="category">Total Duration</label>
                            <input id="duration" value={valuesFilter.duration} onChange={handleChange} className="py-1 px-3 placeholder-gray-800 dark:placeholder-gray-400 bg-transparent border border-gray-500 rounded" type="text" placeholder="Find by total duration (by hours)"/>
                        </div>

                        <div className="flex items-center absolute bottom-5 right-5">
                            <button onClick={handleSubmit}
                                className="shadow-md bg-blue-500 py-2 px-4 rounded text-gray-100 dark:bg-blue-600 mr-2">
                                Submit
                            </button>
                            <button 
                                onClick={closeModal} 
                                className="shadow-md bg-gray-500 py-2 px-4 rounded text-gray-200 dark:bg-gray-600">
                                Close
                            </button>
                        </div>
                    </div>   
                </Modal>}
                <Courses courses={allCourses}/>
            </Wrapper>
    )
}

export default AllCourses
