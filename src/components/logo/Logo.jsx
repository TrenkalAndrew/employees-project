import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../image/Image';

const Logo = ({ isTextLogo, url, text, imageSrc }) => {
  return (
    <>
      {isTextLogo && (
        <Link to={url} className="brand-logo">
          {text}
        </Link>
      )}
      {isTextLogo || (
        <Link to={url}>
          <Image src={imageSrc} alt={text} />
        </Link>
      )}
    </>
  );
};

Logo.propTypes = {
  isTextLogo: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

Logo.defaultProps = {
  isTextLogo: true,
  url: '/',
  text: '',
  imageSrc: '',
};

export default Logo;
