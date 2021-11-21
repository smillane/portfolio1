import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, ListItem, ListItemText, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
  },
  alignRight: {
    alignItems: 'right'
  },
  alignLeft: {
    alignItems: 'left'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },  
  title: {
    flexGrow: 1,
  },
});
  
export default function Navbar() {
  const classes = useStyles();
  
  return (
    <AppBar position="static" color='transparent'>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {window.location.pathname.substring(1)}
        </Typography>
        <IconButton aria-label="Linkedin.com" color="inherit" onClick={() => window.open("https://www.linkedin.com/in/smillane/")}>
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="Github.com" color="inherit" onClick={() => window.open("https://github.com/smillane")}>
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
