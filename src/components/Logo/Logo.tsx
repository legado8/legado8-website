import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledLogo } from './StyledLogo';

export const Logo = ({ alt }) => (
  <StyledLogo>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <StaticImage
        src={'../../images/logo.png'}
        width={100}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt={alt}
        loading={'eager'}
      />
    </Link>
  </StyledLogo>
);

Logo.propTypes = {
  alt: PropTypes.string,
};
