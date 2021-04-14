import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';

export default function Projects() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'project']{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main>
            <section>                
                <h1>My Projects</h1>
                <section>
                    {projectData && projectData.map((project, index) => (
                        <article>
                            <h3>
                                <a 
                                    href = {project.link}
                                    alt = {project.title}
                                    target = '_blank'
                                    rel = 'noopener noreferrer'
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <div>
                                <span>Completed on {new Date(project.date).toLocaleDateString()}</span>
                                <span>Project Type:{" "} {project.projectType}</span>
                                <p>{project.description}</p>
                                <a href = {project.link} rel = 'noopener noreferrer' target = '_blank'>View this project</a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    );
}