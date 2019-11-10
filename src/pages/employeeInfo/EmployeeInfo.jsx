import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getEmployees,
  getEmployeeById,
  createComment,
} from '../../actions/employees';
import HorizontalCard from '../../components/horizontalCard/HorizontalCard';
import { getNormalizedDate } from '../../Helpers/helper';
import Form from '../../components/form/Form';
import Slider from '../../components/slider/Slider';
import Img from '../../components/image/Image';
import { Link } from 'react-router-dom';
import { EMPLOYEE_INFO_URL } from '../../const';

const EmployeeInfo = ({
  location,
  employees,
  getEmployeeById,
  createComment,
}) => {
  const getEmployeeId = () => {
    const { pathname } = location;

    return Number(pathname.split('/')[2]);
  };

  const id = getEmployeeId();

  useEffect(() => {
    //Если пользователь перезагрузил страницу, то необходимо загрузить достаточные данные для карусели, после чего подгрузить данные для карточки
    if (employees.items.length) {
      const employee = employees.items.find(employee => {
        return employee.id === id;
      });

      if (!employee) {
        getEmployeeById(id, true);
      } else {
        if (!employee.comments) {
          getEmployeeById(id, false);
        }
      }
    } else {
      getEmployeeById(id, true);
    }
  }, [id]);

  const employee = employees.items.find(item => item.id === id) || {};

  const {
    imageUrl = '',
    firstName = '',
    lastName = '',
    position = '',
    address = '',
    comments = [],
  } = employee;

  const sortedComments = comments.sort((a, b) => b.date - a.date).slice(0, 5);

  return (
    <main className="container layout">
      <Slider itemsOnScreen={3} navButtons={true} dots={true} autoPlay={4000}>
        {employees.items.map(
          ({ id, imageUrl, firstName, lastName, position }) => (
            <Link key={id} to={`${EMPLOYEE_INFO_URL}/${id}`}>
              <Img
                src={imageUrl}
                alt={`${firstName} ${lastName} - ${position}`}
              />
            </Link>
          )
        )}
      </Slider>
      {Object.keys(employee).length !== 0 && (
        <>
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
              {sortedComments.map(({ title, text, date }) => {
                return (
                  <blockquote key={`${date}${Math.random()}`}>
                    <time dateTime={date}>{getNormalizedDate(date)}</time>
                    <div>
                      <em>{title}</em>
                    </div>
                    <p>{text}</p>
                  </blockquote>
                );
              })}
            </HorizontalCard>
          </div>
          <div className="row">
            <Form submitHandler={createComment} id={id} />
          </div>
        </>
      )}
    </main>
  );
};

const mapStateToProps = state => ({
  employees: state.employees,
});

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(getEmployees),
  getEmployeeById: (id, isFirstVisit) =>
    dispatch(getEmployeeById(id, isFirstVisit)),
  createComment: (id, title, text, phone) =>
    dispatch(createComment(id, title, text, phone)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeInfo);
