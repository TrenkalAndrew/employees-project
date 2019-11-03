import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import SliderNavButton from '../../components/sliderNavButton/SliderNavButton';

const Slider = ({ data, renderFunction, withNavButtons }) => {
  const [activeIndex, setActiveIndex] = useState(5);

  const navBtnHandleClick = step => {
    let newActiveIndex = activeIndex + step;

    if (newActiveIndex === -1) {
      newActiveIndex = data.length - 1;
    } else if (newActiveIndex === data.length) {
      newActiveIndex = 0;
    }

    setActiveIndex(newActiveIndex);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="slider-main">
          {withNavButtons && (
            <SliderNavButton
              position="left"
              clickFunction={() => navBtnHandleClick(-1)}
            />
          )}
          <div className="cards-slider">
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${activeIndex * (100 / data.length)}%)`,
              }}
            >
              {renderFunction(activeIndex, data)}
            </div>
          </div>
          {withNavButtons && (
            <SliderNavButton
              position="right"
              clickFunction={() => navBtnHandleClick(1)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  renderFunction: PropTypes.func,
  withNavButtons: PropTypes.bool,
};

export default Slider;
