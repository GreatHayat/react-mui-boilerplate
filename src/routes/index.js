import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from './routeFuncs';
import { routeArray } from './routeArray';
import PrivateRoute from '../components/hoc/privateRoute';
import PageNotFound from '../containers/PageNotFound/loadable';

function Routes() {
  return (
    <>
      <Switch>
        {renderRoutes(routeArray)}
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </>
  );
}

export default Routes;
