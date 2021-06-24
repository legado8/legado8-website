import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import { StyledMenu } from './StyledMenu';

export const Menu = () => {
  const { pathname } = useLocation();
  return (
    <StyledMenu>
      {pathname !== '/' && (
        <li>
          <Link to="/">Legado8</Link>
        </li>
      )}
      {pathname === '/' && (
        <li>
          <Link to="/origin">Origen</Link>
        </li>
      )}
      <li>
        <a href="https://legado8.github.io/cultural/" target={'_blank'}>
          Revista Cultural
        </a>
      </li>
      <li>
        <Link to="/contact">Contacto</Link>
      </li>
    </StyledMenu>
  );
};
