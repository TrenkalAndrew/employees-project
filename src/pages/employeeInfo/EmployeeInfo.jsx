import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getEmployees,
  getEmployeeById,
  createComment,
} from '../../actions/employees';
import HorizontalCard from '../../components/horizontalCard/HorizontalCard';
import { getNormalizedDate } from '../../Helpers/helper';
import Form from '../../containers/form/Form';
import Slider from '../../containers/slider/Slider';
import Slide from '../../components/slide/Slide';
import Classnames from 'classnames';

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
      }
      else {
        if (!employee.comments) {
          getEmployeeById(id, false);
        }
      }
    } else {
      getEmployeeById(id, true);
    }
  }, [id]);

  const renderFunctionForSlider = (activeIndex, items) => {
    return (
      <>
        {items.map((item, index) => {
          const classes = Classnames('slide', {
            active: index === activeIndex,
          });

          return <Slide key={index} classes={classes} item={item} />;
        })}
      </>
    );
  };

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
      <Slider
        data={employees.items}
        renderFunction={renderFunctionForSlider}
        withNavButtons={true}
      />
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
