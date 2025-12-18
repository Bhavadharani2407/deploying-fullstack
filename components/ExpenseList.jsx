import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../redux/expenseSlice';

const ExpenseList = ({ groupId }) => {
  const dispatch = useDispatch();
  const { expenses, loading } = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses(groupId));
  }, [dispatch, groupId]);

  if (loading) return <p>Loading...</p>;
  if (!expenses.length) return <p>No expenses yet.</p>;

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense._id}>
          {expense.name} - ${expense.amount.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;