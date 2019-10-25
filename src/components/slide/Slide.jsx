import React from 'react';
import { EMPLOYEE_INFO_URL } from '../../const';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Slide = ({
  classes,
  item: { id, imageUrl, firstName, lastName, position },
}) => {
  return (
    <div className={classes}>
      <Link to={`${EMPLOYEE_INFO_URL}/${id}`}>
        <img src={imageUrl} alt={`${firstName} ${lastName} - ${position}`} />
      </Link>
    </div>
  );
};

Slide.propTypes = {
  classes: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
  }),
};

export default Slide;
