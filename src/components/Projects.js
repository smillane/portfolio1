import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';
import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    gridStyling: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    paperStyling: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(3),
    },
    headerStyling: {
        textAlign: 'center',
        padding: '1em',
    },
    preOverFlow: {
        overflow: 'visible',
    }
}));

export default function Projects() {
    const classes = useStyles();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'project']{
            title,
            date,
            description1,
            description2,
            description3,
            description4,
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
                    <p>{project.description1}</p>
                    <p>{project.description2}</p>
                    <p>{project.description3}</p>
                    <p>{project.description4}</p>
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