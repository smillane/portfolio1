import React from 'react';
import { makeStyles, Grid, Typography, Card, CardContent } from "@material-ui/core";
import heroImage from '../images/home.jpg';

const useStyles = makeStyles( {
    root: {
        backgroundImage: `url(${heroImage})`,
        backgroundColor: '#3896A6',
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        backgroundPosition: 'center',
        minHeight: '95vh',
    },
    textStyle: {
    },
    cardStyling: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)',
        minWidth: '100vw',
    },
    mobileCardStyling: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)',
        minWidth: '100vh',
    },
});

export default function Home() {
    const classes = useStyles();
    const deviceCardStyling = window.innerWidth >= 650 ? '100%' : 'auto';
    return (
        <main className = {classes.root}>
            <Grid
            container
            spacing = {0}
            alignItems = 'center'
            justify = 'center'
            style={{ paddingTop: '5%'}}
            >
                <Grid item width={deviceCardStyling}>
                    <Card className={classes.cardStyling} variant='elevation' elevation='10'>
                        <CardContent className = {classes.textStyle}>
                        <Typography variant='h3' align='center' gutterBottom>Sean Millane</Typography>
                            <Typography variant='h4' align='center' gutterBottom>Highly motivated, self-taught software engineer with a passion for software development and technology.</Typography>
                            <Typography variant='h4' align='center' gutterBottom>Detail-oriented civil engineer looking to transition to software engineering.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </main>
    );
}