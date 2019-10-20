import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions/employees';
import HorizontalCard from '../../components/horizontalCard/HorizontalCard';
import {getNormalizedDate} from '../../Helpers/helper';

class EmployeeInfo extends PureComponent {
  state = {
    employee: {},
  };

  getEmployeeId() {
    const { location } = this.props;
    const { pathname } = location;

    return Number(pathname.split('/')[2]);
  }

  componentDidMount() {
    const { employees, getEmployees } = this.props;
    const id = this.getEmployeeId();

    if (employees.items.length) {
      const employee = employees.items.find(employee => {
        return employee.id === id;
      });

      if (!employee) {
        getEmployees();
      } else {
        this.setState({
          employee,
        });
      }
    } else {
      getEmployees();
    }
  }

  componentDidUpdate() {
    const { employee } = this.state;

    if (Object.keys(employee).length === 0) {
      // if (!employee) {
      const { employees } = this.props;
      const id = this.getEmployeeId();

      this.setState({
        employee: employees.items.find(employee => {
          return employee.id === id;
        }),
      });
    }
  }

  render() {
    const { employee } = this.state;
    const {
      imageUrl = '',
      firstName = '',
      lastName = '',
      position = '',
      address = '',
      comments = [],
    } = employee;

    return (
      <main className="container layout">
        <div className="row">
          <div className="col s12">slider</div>
        </div>
        {Object.keys(employee).length !== 0 && (
          <div className="row">
            <HorizontalCard
              imageSrc={imageUrl}
              alt={`${firstName} ${lastName} - ${position}`}
            >
              <h4>
                {firstName} {lastName}
              </h4>
              <div>
                Position: <span>{position}</span>
              </div>
              <div>
                Address: <span>{address}</span>
              </div>
              <div className="divider"></div>
              <div>Latest comments:</div>
              {comments.map(({ title, date }) => {
                return (
                  <blockquote key={date}>
                    <time dateTime={date}>{getNormalizedDate(date)}</time>
                    <div><em>{title}</em></div>
                  </blockquote>
                );
              })}
            </HorizontalCard>
          </div>
        )}
      </main>
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
)(EmployeeInfo);
