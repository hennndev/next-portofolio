import React from 'react'
import Project from './project'
import { allProjects } from '../../constants/constants'

const Projects = () => {
    return (
        <div className="mt-7 grid grid-cols-autoFill gap-7">
            {allProjects.map(project => (
                <Project
                    key={project.id}
                    image={project.image}
                    url={project.url}
                    title={project.title}
                    desc={project.desc}/>
            ))}
        </div>
    )
}

export default Projects
