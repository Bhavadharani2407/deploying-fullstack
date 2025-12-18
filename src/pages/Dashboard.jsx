import React from 'react';
import GroupForm from '../components/GroupForm';
import GroupList from '../components/GroupList';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <GroupForm />
      <GroupList />
    </div>
  );
};

export default Dashboard;
