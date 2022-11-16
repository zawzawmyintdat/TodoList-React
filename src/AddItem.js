import React, { useContext, useState } from 'react';
import { TodoContext } from './context/TodoContext';

const AddItem = () => { //{ addItem }

  const { addItem } = useContext(TodoContext)
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
          placeholder="Add New Item"
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default AddItem;
