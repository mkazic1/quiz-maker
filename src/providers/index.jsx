import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material';
import theme from '../style/theme';

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
