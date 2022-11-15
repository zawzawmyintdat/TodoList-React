import React, { useState } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [list, setList] = useState([{ name: 'Learing', id: 1 }]);
  const addItem = (item) => {
    const items = { name: item, id: uuidv4() };
    setList([...list, items]);
  };

  const deleteItem = (item) => {
    setList(item);
  };
  return (
    <div className="content">
      <h1>Todo List</h1>
      <TodoList addItem={addItem} deleteItem={deleteItem} lists={list} />
    </div>
  );
}
