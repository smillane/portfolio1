import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, Button, Drawer, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button component={NavLink} to='/' >
            <ListItemText primary='Home'/>
          </ListItem>
          <ListItem button component={NavLink} to='/Projects' >
            <ListItemText primary='Projects'/>
          </ListItem>
          <ListItem button component={NavLink} to='/About' >
            <ListItemText primary='About'/>
          </ListItem>
      </List>
    </div>
  );
  
  return (
  <AppBar position="static">
    <Toolbar>
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><MenuIcon color='inherit' /></Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
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