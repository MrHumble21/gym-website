import React from 'react';
import { Stack } from '@mui/material';
import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="start" width="100%">
    <CirclesWithBar color="red" />
  </Stack>
);

export default Loader;