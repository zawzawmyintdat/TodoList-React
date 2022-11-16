import React,{createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {


    const [list, setList] = useState([{ name: 'Learing', id: 1 }]);

    const addItem = (item) => {
      const items = { name: item, id: uuidv4() };
      setList([...list, items]);
    };
  
    const deleteItem = (item) => {
      setList(item);
    };


    return ( 
        <TodoContext.Provider value={{list, addItem, deleteItem}}>
            {props.children}
        </TodoContext.Provider>
     );
}
 
export default TodoContextProvider;
