import React from 'react';
import { CssBaseline, makeStyles } from "@material-ui/core";
import heroImage from '../images/birdgrass.jpg';
import "../index.css"

const useStyles = makeStyles( {
    root: {
        minHeight: '100vh',
        minWidth: '100vh',
        backgroundimage: `url(${heroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        margin: 'auto',
        backgroundPosition: 'center',
    },
    textStyle: {
        textAlign: 'center',
    },
});

export default function Home() {
    const classes = useStyles();
    return (        
        <homepage className={classes.root}>
            <CssBaseline />
            <section className={classes.textStyle}>
                <h1>Sean Millane</h1>
                <h2>Highly motivated self-taught software engineer with a passion for software development and technology.</h2>
                <h2>Detail-oriented civil engineer looking to transition to software engineering.</h2>
            </section>
        </homepage>
    );
}