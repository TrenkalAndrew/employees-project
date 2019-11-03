import React from 'react';
import Classnames from 'classnames';

const SliderNavButton = ({position, clickHandler}) => {
  const classes = Classnames('slider-nav-btn', {
    'slider-nav-btn-left': position === 'left',
    'slider-nav-btn-right': position === 'right',
  });

  return (
    <>
      {position === 'left' ? (
        <button className={classes} onClick={clickHandler}>&#8249;</button>
      ) : (
        <button className={classes} onClick={clickHandler}>&#8250;</button>
      )}
    </>
  );
};

export default SliderNavButton;
