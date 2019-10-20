import React from 'react';
import Employees from '../../containers/employees/Employees';

const Home = () => {
  return (
    <main className="container layout">
      <div className="row">
        <div className="col s12">
          <Employees />
        </div>
      </div>
    </main>
  );
};

export default Home;
