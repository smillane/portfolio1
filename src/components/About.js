import React from "react";
import { Card, CardContent, makeStyles, Typography, Grid } from "@material-ui/core";
import heroImage from '../images/about.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${heroImage})`,
        backgroundColor: '#0F1921',
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        minWidth: '10vh',
    },
    textStyle: {
        color: 'black',
        padding: theme.spacing(3),
        opacity: '1.0',
    },
    cardStyling: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        paddingLeft: '5%',
        paddingRight: '5%',
    }
}));

export default function About() {
    const classes = useStyles();
    const deviceCardStyling = window.innerWidth >= 650 ? '100%' : 'auto%';
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
                    <Card className = {classes.cardStyling} variant='elevation' elevation='10'>
                        <CardContent className = {classes.textStyle}>
                            <Typography variant='h4' align='left' gutterBottom>My hobbies include cooking, gaming, bouldering, reading, running, programming, and building computers.</Typography>
                            <Typography variant='h4' align='left' gutterBottom>I have my hands full with 3 dogs. A husky, english shepherd, and a boxer/lab mix.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </main>
    );
}