import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Image from '../image/Image';
import PropTypes from 'prop-types';

const VerticalCard = ({ id, src, firstName, lastName, position, children }) => {
  return (
    <div className="col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <Image src={src} alt={`${firstName} ${lastName} - ${position}`} />
        </div>
        <div className="card-content">{children}</div>
        <div className="card-action">
          <Link to={`/employee/${id}`}>More info</Link>
        </div>
      </div>
    </div>
  );
};

VerticalCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  position: PropTypes.string,
};

VerticalCard.defaultProps = {
  firstName: '',
  lastName: '',
  position: '',
};

export default VerticalCard;
