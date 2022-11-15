import React from 'react';
import AddItem from './AddItem';

const TodoList = ({ addItem, deleteItem, lists }) => {
  const handleDelete = (id) => {
    const finalList = lists.filter((list) => list.id !== id);
    console.log(id);
    deleteItem(finalList);
  };
  return (
    <div className="todo-list">
      <ul>
        {lists.map((list) => {
          return (
            <li key={list.id} onClick={() => handleDelete(list.id)}>
              {list.name}
            </li>
          );
        })}
      </ul>
      <AddItem addItem={addItem} />
    </div>
  );
};

export default TodoList;
