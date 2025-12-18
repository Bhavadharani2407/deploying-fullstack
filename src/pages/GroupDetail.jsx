import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Settlement from '../components/Settlement';
import axios from 'axios';

const GroupDetail = () => {
  const { id } = useParams();
  const [settlements, setSettlements] = useState([]);

  useEffect(() => {
    // Fetch settlements from backend
    const fetchSettlements = async () => {
      try {
        const response = await axios.get(`/api/groups/${id}/settlements`);
        setSettlements(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSettlements();
  }, [id]);

  return (
    <div>
      <h2>Group Details</h2>
      <ExpenseForm groupId={id} />
      <ExpenseList groupId={id} />
      <Settlement settlements={settlements} />
    </div>
  );
};

export default GroupDetail;
