import React from 'react';
import 'materialize-css/sass/materialize.scss';
import Header from '../header/Header';

function App({ children }) {
  return (
    <div className="App">
      <Header withLogo={true}/>
      {children}
    </div>
  );
}

export default App;
