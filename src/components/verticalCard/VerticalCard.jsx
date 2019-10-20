import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Image from '../image/Image';

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

export default VerticalCard;
