import React from 'react';
import { CssBaseline, makeStyles } from "@material-ui/core";
import image from "../images/birdgrass.jpg";

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        backgroundimage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover', 
    },
    textStyle: {
        textAlign: 'center',
    }
});

export default function Home() {
    const classes = useStyles();
    return (        
        <main className={classes.root}>
            <CssBaseline />
            <section className={classes.textStyle}>
                <h1>Sean Millane</h1>
                <h2>Highly motivated self-taught software engineer with a passion for software development and technology.</h2>
                <h2>Detail-oriented civil engineer looking to transition to software engineering.</h2>
            </section>
        </main>
    );
}