import React from "react";
import { Card, CardContent, makeStyles, Typography, Grid } from "@material-ui/core";
import heroImage from '../images/rockclimb2.jpg';

const useStyles = makeStyles( {
    root: {
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        minWidth: '10vh',
    },
    textStyle: {
        verticalAlign: 'middle',
        position: 'relative',
        minHeight: '50%',
        color: 'black',
        paddingTop: '10%',
        opacity: '1.0',
    },
    cardStyling: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        paddingLeft: '5%',
        paddingRight: '5%',
    }
});

export default function About() {
    const classes = useStyles();
    return (
        <main className = {classes.root}>
            <Grid
            container
            spacing = {0}
            alignItems = 'center'
            justify = 'center'
            style={{ minHeight: '35vh' }}
            >
                <Grid item xs={8} sm={6} md={4} lg={5} xl={3} >
                    <Card className = {classes.cardStyling} variant='elevation' elevation='10'>
                        <CardContent className = {classes.textStyle}>
                            <Typography variant='h4' align='left' gutterBottom>My hobbies include cooking, gaming, bouldering, reading, running, programming, and building computers.</Typography>
                            <Typography variant='h4' align='left' gutterBottom>I have my hands full with 3 dogs. A husky, english shephard, and a boxer/lab mix.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </main>
    );
}