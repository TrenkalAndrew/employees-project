import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions/employees';

class Employees extends PureComponent {
  componentDidMount() {
    const { getEmployees } = this.props;

    getEmployees();
  }

  render() {
    return <div>asdasd</div>;
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
