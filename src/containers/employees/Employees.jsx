import React, { PureComponent } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions/employees';
import VerticalCard from '../../components/verticalCard/VerticalCard';
import { EMPLOYEE_INFO_URL } from '../../const';

class Employees extends PureComponent {
  componentDidMount() {
    const { getEmployees } = this.props;

    getEmployees();
  }

  render() {
    const { employees } = this.props;
    const { items } = employees;

    return (
      <div className="container">
        <h1>Our team</h1>
        {items.map(({ id, firstName, lastName, position, imageUrl }) => (
          <VerticalCard key={id} id={id} imageSrc={imageUrl} alt={`${firstName} ${lastName} - ${position}`} url={`${EMPLOYEE_INFO_URL}/${id}`}>
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
  }
}

const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(getEmployees),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);
