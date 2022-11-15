import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };
  return (
    <div className="add-item">
      <form onSubmit={handleClick}>
        <input
          required
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="text something..."
        />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
