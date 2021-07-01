import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { useAuthContext } from '../../context/authContext';

const drawerWidth = 240;

const useStyles = makeStyles({
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
});

const SideDrawer = ({ open, variant, handleDrawerToggle, drawerItems }) => {
  const classes = useStyles();
  const { user } = useAuthContext();
  return (
    <>
      <Drawer
        open={open}
        variant={variant}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {drawerItems.map((item) => (
              <>
                {item.role ? (
                  item.role.indexOf(user.data.role) !== -1 && (
                    <ListItem
                      button
                      key={item.text}
                      component={Link}
                      to={item.link}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  )
                ) : (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.link}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                )}
              </>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

SideDrawer.propTypes = {
  open: propTypes.bool,
  variant: propTypes.string,
  handleDrawerToggle: propTypes.func,
  drawerItems: propTypes.instanceOf(Array),
};

SideDrawer.defaultProps = {
  open: true,
  variant: 'persistent',
  handleDrawerToggle: propTypes.func,
  drawerItems: [],
};
export default SideDrawer;
