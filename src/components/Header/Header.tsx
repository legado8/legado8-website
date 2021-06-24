import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from '../Menu';
import { StyledHeader } from './StyledHeader';
import { Logo } from '../Logo';

export const Header = ({ title = '' }) => (
  <StyledHeader>
    <Logo alt={title} />
    <Menu />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};
