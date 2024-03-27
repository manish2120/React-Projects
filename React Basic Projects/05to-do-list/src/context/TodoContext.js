import { createContext, useContext } from 'react'

  export const todoContext = createContext({
    todos: [
      {
        id: 1,
        todo: "Study",
        completed: false
      },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompletion: (id) => {}
  });

  export const useTodoContext = () => {
    return useContext(todoContext);
  }

  export const TodoProvider = todoContext.Provider;