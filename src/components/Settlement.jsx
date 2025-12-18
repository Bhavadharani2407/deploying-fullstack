import React from 'react';

// Props: settlements = [{ from: 'Alice', to: 'Bob', amount: 10 }]
const Settlement = ({ settlements }) => {
  if (!settlements.length) return <p>No settlements needed.</p>;

  return (
    <div>
      <h3>Settlement Suggestions</h3>
      <ul>
        {settlements.map((s, index) => (
          <li key={index}>
            {s.from} pays {s.to} ${s.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settlement;
