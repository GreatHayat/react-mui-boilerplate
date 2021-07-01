import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Spinner = () => (
  <>
    <Box display="flex" flex="1" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Box>
  </>
);

export default Spinner;
