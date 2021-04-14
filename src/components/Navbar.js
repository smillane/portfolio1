import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
          <MenuItem component={NavLink} to="/" onClick={handleClose}>Home</MenuItem>
          <MenuItem component={NavLink} to="/Projects" onClick={handleClose}>Projects</MenuItem>
          <MenuItem component={NavLink} to="/About" onClick={handleClose}>About</MenuItem>
      </Menu>
      <Typography variant="h6" className={classes.title}>
        {window.location.pathname.substring(1)}
      </Typography>
      <IconButton aria-label="Linkedin.com" color="inherit" onClick={() => window.open("https://www.linkedin.com/in/smillane/")}>
        <LinkedInIcon></LinkedInIcon>
      </IconButton>
      <IconButton aria-label="Github.com" color="inherit" onClick={() => window.open("https://github.com/smillane")}>
        <GitHubIcon></GitHubIcon>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
}