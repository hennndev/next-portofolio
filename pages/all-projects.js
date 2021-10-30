import React from 'react'
import Projects from '../components/projects/projects'
import Wrapper from '../components/ui/wrapper'
import Head from 'next/head'

const AllProjects = () => {
    return (
        <Wrapper>
            <Head>
        		<title>Projects Page</title>
        		<meta name="description" content="Generated by create next app" />
        		<link rel="icon" href="/favicon.ico" />
      		</Head>
            <h1 className="font-bold text-3xl">My Projects</h1>
            <Projects/>
        </Wrapper>
    )
}

export default AllProjects
