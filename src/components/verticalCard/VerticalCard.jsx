import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Image from '../image/Image';
import PropTypes from 'prop-types';

const VerticalCard = ({ id, imageSrc, alt, firstName, lastName, position, url, children }) => {
  return (
    <div className="col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <Image src={imageSrc} alt={alt} />
        </div>
        <div className="card-content">{children}</div>
        <div className="card-action">
          <Link to={url}>More info</Link>
        </div>
      </div>
    </div>
  );
};

VerticalCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imageSrc: PropTypes.string.isRequired,
  url: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  position: PropTypes.string,
};

VerticalCard.defaultProps = {
  url: '/',
  firstName: '',
  lastName: '',
  position: '',
};

export default VerticalCard;
