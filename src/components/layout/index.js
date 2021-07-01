import React, { useState } from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import Header from './header';
import SideBar from './sidebar';
import { useAuthContext } from '../../context/authContext';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const MainLayOut = ({ children }) => {
  const classes = useStyles();
  const { user } = useAuthContext();
  const [open, setOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMobileDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header
        open={open}
        isMobileOpen={isMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />
      {user.isAuthenticated && (
        <SideBar
          open={open}
          isMobileOpen={isMobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          handleMobileDrawerToggle={handleMobileDrawerToggle}
        />
      )}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

MainLayOut.propTypes = {
  children: propTypes.node,
};

MainLayOut.defaultProps = {
  children: {},
};

export default MainLayOut;
