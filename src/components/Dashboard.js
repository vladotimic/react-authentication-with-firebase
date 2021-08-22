import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';

import { useAuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const [error, setError] = useState('');

  const { currentUser, signout } = useAuthContext();

  const history = useHistory();

  async function handleSignOut() {
    setError('');
    try {
      await signout();
      history.push('/signin');
    } catch (error) {
      setError('Failed to sign out');
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
    </>
  );
};

export default Dashboard;
