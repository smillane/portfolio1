import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';
import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridStyling: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    paperStyling: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary
    },
    headerStyling: {
        textAlign: 'center',
        padding: '1em',
    },
}));

export default function Projects() {
    const classes = useStyles();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'project']{
            title,
            date,
            description,
            projectType,
            link,
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    const displayprojects = projectData && projectData.map((project, index) => (
        <Grid item xs={4} key={index} className = {classes.gridStyling}>
            <Paper className = {classes.paperStyling}>
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
                    <p>Completed on {new Date(project.date).toLocaleDateString()}</p>
                    <p>Project Type:{" "} {project.projectType}</p>
                    <p>{project.description}</p>
                    <a href = {project.link} rel = 'noopener noreferrer' target = '_blank'>View this project</a>
                </div>
            </Paper>
        </Grid>
    ));

    return (
        <main>
            <section>                
                <h1 className = {classes.headerStyling}>My Projects</h1>
                <section className = {classes.root}>
                    <Grid 
                        container
                        direction = 'row'
                        justify = 'center'
                        alignItems = 'center'
                        spacing = {3}
                    >
                        {displayprojects}
                    </Grid>
                </section>
            </section>
        </main>
    );
}