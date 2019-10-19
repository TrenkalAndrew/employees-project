import React from 'react';
import PropTypes from 'prop-types';
import { LOGO_TITLE } from '../../const';
import Logo from '../logo/Logo';

const Header = ({ withLogo }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <div className="row">
            {withLogo && <Logo isTextLogo={true} url="/" text={LOGO_TITLE} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  withLogo: PropTypes.bool,
};

Header.defaultProps = {
  withLogo: false,
};

export default Header;
