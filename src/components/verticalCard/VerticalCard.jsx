import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const VerticalCard = ({ id, src, firstName, lastName, position }) => {
  return (
    <div className="col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <img src={src} />
        </div>
        <div className="card-content">
          <div title={`${firstName} ${lastName}`}>
            <b>
              {firstName} {lastName}
            </b>
          </div>
          <div title={position}>
            Position: <b>{position}</b>
          </div>
        </div>
        <div className="card-action">
          <Link to={`/employee/${id}`}>More info</Link>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
