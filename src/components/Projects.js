import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';
import { Button, CssBaseline, Grid, makeStyles, Paper, Typography, Card, CardContent } from '@material-ui/core';
import heroImage from '../images/ladybug.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(),
        paddingBottom: theme.spacing(2),
    },
    preOverFlow: {
        overflow: 'visible',
    },
    mainBackground: {
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        minWidth: '10vh',
    },
    cardStyling: {
        backgroundColor: 'rgba(255,255,255,0.7)',
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
        <Grid item xs={8} sm={6} md={4} lg={3} xl={3} key={index} className = {classes.gridStyling}>
            <Paper className = {classes.paperStyling} variant='elevation' elevation='10'>
                <Typography variant='h4' align='justify' href = {project.link} alt = {project.title} target = '_blank' rel = 'noopener noreferrer'>
                    {project.title}
                </Typography>
                <Typography align='justify' gutterBottom>
                    Completed on {new Date(project.date).toLocaleDateString()}
                </Typography>
                <Typography gutterBottom>{project.description1}</Typography>
                <Typography gutterBottom>{project.description2}</Typography>
                <Typography gutterBottom>{project.description3}</Typography>
                <Typography gutterBottom>{project.description4}</Typography>
                <Button aria-label="Github.com" href = {project.link} rel = 'noopener noreferrer' target = '_blank' endIcon>
                    View this project <GitHubIcon />
                </Button>
            </Paper>
        </Grid>
    ));

    return (
        <main className = {classes.mainBackground}>
            <CssBaseline />
            <section>
                <Grid
                container
                spacing = {0}
                alignItems = 'center'
                justify = 'center'
                style={{ minHeight: '20vh' }}
                >
                    <Grid item xs={10} sm={8} md={6} lg={4} xl={3} >
                        <Card className = {classes.cardStyling}>
                            <CardContent className = {classes.textStyle}>
                                <Typography variant='h1' align='center' color='inherit'>My Projects</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <section className = {classes.root}>
                    <Grid 
                        container
                        direction = 'row'
                        wrap = 'wrap'
                        justify = 'center'
                        alignItems = 'center'
                        spacing = {0}
                    >
                        {displayprojects}
                    </Grid>
                </section>
            </section>
        </main>
    );
}