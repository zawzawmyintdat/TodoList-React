import React from 'react';
import TodoContextProvider from './context/TodoContext';
import TodoList from './TodoList';


export default function App() {

  return (
    <div className="content">
      <h1>Plan Items</h1>
      <TodoContextProvider>
        {/* <TodoList addItem={addItem} deleteItem={deleteItem} lists={list} /> */}
        <TodoList/>
      </TodoContextProvider>
    </div>
  );
}
