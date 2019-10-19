import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';

const Img = ({ src, alt, className, ...attrs }) => {
  const [isLoading, setIsLoading] = useState(true);

  const classes = classnames(className);

  const image = new Image();
  image.src = src;
  image.onload = () => {
    setIsLoading(false);
    if (attrs.onLoad) attrs.onLoad();
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <img src={src} alt={alt} className={classes} {...attrs} />
      )}
    </>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
