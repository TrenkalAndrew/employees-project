import React, { PureComponent } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions/employees';
import VerticalCard from '../../components/verticalCard/VerticalCard';

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
          <VerticalCard
            key={id}
            id={id}
            src={imageUrl}
            firstName={firstName}
            lastName={lastName}
            position={position}
          />
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
