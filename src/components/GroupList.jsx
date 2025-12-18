import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../redux/groupSlice';
import { Link } from 'react-router-dom';

const GroupList = () => {
  const dispatch = useDispatch();
  const { groups, loading } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  if (loading) return <p>Loading groups...</p>;
  if (!groups.length) return <p>No groups created yet.</p>;

  return (
    <ul>
      {groups.map((group) => (
        <li key={group._id}>
          <Link to={`/groups/${group._id}`}>{group.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
