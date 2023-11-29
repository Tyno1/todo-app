import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [title, setTitle] = useState('');

    return (
        <TodoContext.Provider value={{title, setTitle}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;

export const useTodoContext = () => {
    return useContext(TodoContext);
}