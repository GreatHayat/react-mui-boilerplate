import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import propTypes from 'prop-types';
import SideDrawer from '../../drawer';
import sidebarItems from './sidebarItems';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
}));

const SideBar = ({
  open,
  isMobileOpen,
  handleDrawerToggle,
  handleMobileDrawerToggle,
}) => {
  const classes = useStyles();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* Drawer for small screens */}
      <Hidden smUp implementation="css">
        <SideDrawer
          open={isMobileOpen}
          variant="temporary"
          drawerItems={sidebarItems}
          handleDrawerToggle={handleMobileDrawerToggle}
        />
      </Hidden>

      {/* Drawer for large screens */}
      <Hidden xsDown implementation="css">
        <SideDrawer
          open={open}
          variant="persistent"
          drawerItems={sidebarItems}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Hidden>
    </nav>
  );
};

SideBar.propTypes = {
  open: propTypes.bool.isRequired,
  isMobileOpen: propTypes.bool.isRequired,
  handleDrawerToggle: propTypes.func.isRequired,
  handleMobileDrawerToggle: propTypes.func.isRequired,
};

export default SideBar;
