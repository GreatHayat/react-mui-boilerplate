import Dashboard from '../containers/Dashboard/loadable';
import Settings from '../containers/Settings/loadable';
import Login from '../containers/Login/loadable';
import { ROLES } from '../utils/constants';

const routeTypes = { public: 'public', private: 'private' };

export const routeArray = [
  {
    path: '/',
    component: Login,
    exact: true,
    breadCrumbKey: 'login',
    routeType: routeTypes.public,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    routeType: routeTypes.private,
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
    breadCrumbKey: 'forgot password',
    routeType: routeTypes.public,
    roles: [ROLES.ADMIN],
  },
];
