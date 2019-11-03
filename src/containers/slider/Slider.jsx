import React, { useState, useEffect } from 'react';
import './style.scss';
import Classnames from 'classnames';
import SliderNavButton from '../../components/sliderNavButton/SliderNavButton';

export const Slider = ({
  itemsOnScreen,
  navButtons,
  dots,
  clickHandler,
  autoPlay,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [sliderWidth, setSliderWidth] = useState(1);
  const [itemWidth, setItemWidth] = useState(0);

  const getSliderWidth = () => {
    const sliderWidth = document.getElementsByClassName('slider')[0]
      .clientWidth;

    setSliderWidth(sliderWidth);
    setItemWidth(sliderWidth / itemsOnScreen);
  };

  const navBtnHandleClick = step => {
    let newActiveIndex = activeIndex + step;

    if (newActiveIndex === -1) {
      newActiveIndex = children.length - 1;
    } else if (newActiveIndex === children.length) {
      newActiveIndex = 0;
    }

    setActiveIndex(newActiveIndex);
  };

  useEffect(() => {
    getSliderWidth();
  }, []);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex + 1 < children.length ? activeIndex + 1: 0)
      }, autoPlay);

      return () => clearInterval(interval);
    }
  }, [activeIndex, children.length]);

  return (
    <div className="row">
      <div className="col s12">
        <div className="slider">
          <SliderNavButton
            position="left"
            clickHandler={() => navBtnHandleClick(-1)}
          />
          <div
            className="slider-wrap"
            style={
              itemsOnScreen % 2
                ? {
                    left: `${-(
                      (sliderWidth / itemsOnScreen) *
                      (activeIndex - (itemsOnScreen - 1) / 2)
                    )}px`,
                  }
                : {}
            }
          >
            {children.map((child, index) => {
              const classes = Classnames('slider-item', {
                active: index === activeIndex || !(itemsOnScreen % 2),
              });

              return (
                <div
                  key={index}
                  className={classes}
                  style={{ width: `${itemWidth}px` }}
                >
                  <div className={'slide-wrap'}>{child}</div>
                </div>
              );
            })}
          </div>
          <SliderNavButton
            position="right"
            clickHandler={() => navBtnHandleClick(1)}
          />
        </div>
        {dots && <div className="dots">
          {children.map((item, index) => {
            const classes = Classnames('dot', {
              active: index === activeIndex || !(itemsOnScreen % 2),
            });

            return (
              <div key={index} className={classes} onClick={() => setActiveIndex(index)}/>
            )
          })}
        </div>}
      </div>
    </div>
  );
};

export default Slider;
