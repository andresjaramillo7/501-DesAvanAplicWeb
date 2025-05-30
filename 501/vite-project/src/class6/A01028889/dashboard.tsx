// src/components/dashboard.tsx
import { FC, useContext } from 'react';
import { UserContext } from './userContext';
import './Styles/dashboard.css';

const Dashboard: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>

        {user.role === 'employee' && (
          <>
            <h2>Employee View</h2>
            <p>Submitted Travel Requests</p>
          </>
        )}

        {user.role === 'manager' && (
          <>
            <h2>Manager View</h2>
            <p>Pending Travel Requests</p>
          </>
        )}

        {user.role === 'admin' && (
          <>
            <h2>Admin View</h2>
            <p>User Management</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
