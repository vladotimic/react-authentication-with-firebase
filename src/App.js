import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import ProfileUpdate from './components/ProfileUpdate';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/update-profile" component={ProfileUpdate} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
};

export default App;
