import React, { PureComponent } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import SliderNavButton from '../../components/sliderNavButton/SliderNavButton';

class Slider extends PureComponent {
  state = {
    activeIndex: 5,
  };

  navBtnHandleClick = step => {
    const { data } = this.props;
    const { activeIndex } = this.state;
    let newActiveIndex = activeIndex + step;

    if (newActiveIndex === -1) {
      newActiveIndex = data.length - 1;
    }
    else if (newActiveIndex === data.length) {
      newActiveIndex = 0
    }

    this.setState({
      activeIndex: newActiveIndex
    });
  };

  render() {
    const { data, renderFunction, withNavButtons } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="row">
        <div className="col s12">
          <div className="slider-main">
            {withNavButtons && (
              <SliderNavButton
                position="left"
                clickFunction={() => this.navBtnHandleClick(-1)}
              />
            )}
            <div className="cards-slider">
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${activeIndex *
                    (100 / data.length)}%)`,
                }}
              >
                {renderFunction(activeIndex, data)}
              </div>
            </div>
            {withNavButtons && (
              <SliderNavButton
                position="right"
                clickFunction={() => this.navBtnHandleClick(1)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  renderFunction: PropTypes.func,
  withNavButtons: PropTypes.bool,
};

export default Slider;
