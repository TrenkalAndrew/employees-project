import React from 'react';
import Image from '../image/Image';
import './style.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HorizontalCard = ({ title, imageSrc, alt, url, linkText, children }) => {
  return (
    <div className="col s12">
      {title && <h2 className="header">{title}</h2>}
      <div className="card horizontal">
        <div className="card-image">
          <span>
            <Image src={imageSrc} alt={alt} />
          </span>
        </div>
        <div className="card-stacked">
          <div className="card-content">{children}</div>
          <div className="card-action">
            <Link to={url}>{linkText}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

HorizontalCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string,
  linkText: PropTypes.string,
};

HorizontalCard.defaultProps = {
  url: '/',
  linkText: 'Come back',
};

export default HorizontalCard;
