import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';
import { Box, Button, CssBaseline, Grid, makeStyles, Paper, Typography, Card, CardContent } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    preOverFlow: {
        overflow: 'visible',
    },
    mainBackground: {
        backgroundRepeat: 'no-repeat',
        backgroundsize: '100%',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        minWidth: '10vh',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    cardStyling: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: theme.spacing(3),
    },
    projectCardStyling: {
        padding: theme.spacing(3),
    },
    vwSizing: {
        width: '70vw',
    },
}));

export default function Projects() {
    const classes = useStyles();
    const deviceCardStyling = window.innerWidth >= 650 ? '100%' : 'auto';
    const deviceContainerStyling = window.innerWidth >= 650 ? '80%' : '100%';
    const deviceBackgroundSyling = window.innerWidth >= 650 ? 'no-repeat' : 'repeat-y';
    const deviceDisplayWidth = window.innerWidth >= 650 ? '70vw' : '100vw';
    const deviceColorWidth = window.innerWidth >= 650 ? 'white' : '#243F4E';
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'project']{
            title,
            description1,
            description2,
            description3,
            description4,
            link,
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    const displayprojects = projectData && projectData.map((project, index) => (
        <Box m={1} p={1} width={deviceCardStyling} key={index}>
            <Paper className={classes.projectCardStyling} variant='elevation' elevation='10'>
                <Typography gutterBottom variant='h4' align='justify' href={project.link} alt={project.title} target = '_blank' rel = 'noopener noreferrer'>
                    {project.title}
                </Typography>
                <Typography gutterBottom>{project.description1}</Typography>
                <Typography gutterBottom>{project.description2}</Typography>
                <Typography gutterBottom>{project.description3}</Typography>
                <Typography gutterBottom>{project.description4}</Typography>
                <Button aria-label="Github.com" href={project.link} rel = 'noopener noreferrer' target = '_blank' endIcon>
                    View this project <GitHubIcon />
                </Button>
            </Paper>
        </Box>
    ));

    return (
        <main className={classes.mainBackground} style={{ backgroundsize: deviceBackgroundSyling, backgroundColor: deviceColorWidth}}>
            <div style= {{ width: deviceDisplayWidth, backgroundColor: '#243F4E' }}>
            <CssBaseline />
                <div width={deviceContainerStyling}>
                    <Grid
                    container
                    spacing = {0}
                    alignItems = 'center'
                    justify = 'center'
                    style={{ minHeight: '20vh'}}
                    >
                        <Grid p={1} item width={deviceCardStyling}>
                            <Card className = {classes.cardStyling}>
                                <CardContent>
                                    <Typography variant='h1' align='center' color='inherit'>My Projects</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <section className = {classes.root} style={{ minHeight: '20vh' }}>
                        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" m={1} p={1} css={{ maxWidth: 850 }}>
                            {displayprojects}
                        </Box>
                    </section>
                </div>
        </div>
    </main>
    );
}