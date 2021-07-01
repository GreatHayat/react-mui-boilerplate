import React from 'react';
import PropTypes from 'prop-types';
import { H1, Spinner } from '../../components';

const Dashboard = ({ message }) => (
  <>
    <H1>This is a Dashboard component</H1>
    <h3>{message}</h3>
    <Spinner />
  </>
);

Dashboard.propTypes = {
  message: PropTypes.string,
};

Dashboard.defaultProps = {
  message: '',
};

export default Dashboard;
