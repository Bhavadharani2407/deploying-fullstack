import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseSlice';

const ExpenseForm = ({ groupId }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({ groupId, expenseData: { name, amount: parseFloat(amount) } }));
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Expense Name" required />
      <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="number" required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
