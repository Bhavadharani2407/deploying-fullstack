import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGroup } from '../redux/groupSlice';

const GroupForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGroup({ name }));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Group Name"
        required
      />
      <button type="submit">Create Group</button>
    </form>
  );
};

export default GroupForm;
