import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/app/App';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import Spinner from './components/spinner/Spinner';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Suspense fallback={<Spinner />}>
            <Route
                exact
                path={'/'}
                component={lazy(() => import('./pages/home/Home'))}
            />
            <Route
                path={'/employee/:id'}
                component={lazy(() => import('./pages/employee/Employee'))}
            />
        </Suspense>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
