import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';
import { ROLES } from '../../../utils/constants';

const sidebarItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
    // role: [ROLES.ADMIN],
  },
  {
    text: 'Invoices',
    icon: <InsertDriveFileIcon />,
    link: '/organization',
    role: [ROLES.USER],
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
    link: '/settings',
    role: [ROLES.ADMIN],
  },
];

export default sidebarItems;
