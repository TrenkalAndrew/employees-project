import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions/employees';
import VerticalCard from '../../components/verticalCard/VerticalCard';
import { EMPLOYEE_INFO_URL } from '../../const';

const Employees = ({ getEmployees, employees }) => {
  useEffect(() => {
    getEmployees();
  }, []);

  const { items } = employees;

  return (
    <div className="container">
      <h1>Our team</h1>
      {items.map(({ id, firstName, lastName, position, imageUrl }) => (
        <VerticalCard
          classes="col s12 m6 xl4"
          key={id}
          id={id}
          imageSrc={imageUrl}
          alt={`${firstName} ${lastName} - ${position}`}
          url={`${EMPLOYEE_INFO_URL}/${id}`}
        >
          <div title={`${firstName} ${lastName}`}>
            <b>
              {firstName} {lastName}
            </b>
          </div>
          <div title={position}>
            Position: <b>{position}</b>
          </div>
        </VerticalCard>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(getEmployees()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
