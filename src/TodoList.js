import React, { useContext } from 'react';
import AddItem from './AddItem';
import { TodoContext } from './context/TodoContext';

const TodoList = () => {//{ addItem, deleteItem, lists }

  const {list, deleteItem} = useContext(TodoContext);


  const handleDelete = (id) => {
    const finalList = list.filter((list) => list.id !== id);
    console.log(id);
    deleteItem(finalList);
  };
  return (
    <div className="todo-list">
      {!list.length && <div>Hello Mother F**ker :)</div> }
      <ul>
        {list.map((list) => {
          return (
            <li key={list.id} onClick={() => handleDelete(list.id)}>
              {list.name}
            </li>
          );
        })}
      </ul>
      <AddItem/>
    </div>
  );
};

export default TodoList;
