import React from 'react';
import { makeStyles, Grid, Typography, Card, CardContent } from "@material-ui/core";
import heroImage from '../images/birdgrass.jpg';

const useStyles = makeStyles( {
    root: {
        backgroundImage: `url(${heroImage})`,
        backgroundColor: '#1A241F',
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        minWidth: '10vh',
    },
    textStyle: {
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
        minHeight: '50%',
        color: 'white',
        paddingTop: '10%',
    },
    cardStyling: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    mobileCardStyling: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: '100vh',
    }
});

export default function Home() {
    const classes = useStyles();
    const mobileFirstName = <Typography variant='h3' align='center' gutterBottom>Sean</Typography>;
    const mobileLastName = <Typography variant='h3' align='center' gutterBottom>Millane</Typography>;
    const NamePlacement = <Typography variant='h3' align='center' gutterBottom>Sean Millane</Typography>;
    const deviceNamePlacement = window.innerWidth >= 650 ? NamePlacement : mobileFirstName && mobileLastName;
    const deviceCardStyling = window.innerWidth >= 650 ? classes.cardStyling : classes.mobileCardStyling;
    return (
        <main className = {classes.root}>
            <Grid
            container
            spacing = {0}
            alignItems = 'center'
            justify = 'center'
            style={{ height: '35vh' }}
            >
                <Grid item xs={8} sm={6} md={4} lg={5} xl={3} >
                    <Card className={deviceCardStyling} variant='elevation' elevation='10'>
                        <CardContent className = {classes.textStyle}>
                            {deviceNamePlacement}
                            <Typography variant='h5' align='center' gutterBottom>Highly motivated, self-taught software engineer with a passion for software development and technology.</Typography>
                            <Typography variant='h5' align='center' gutterBottom>Detail-oriented civil engineer looking to transition to software engineering.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </main>
    );
}