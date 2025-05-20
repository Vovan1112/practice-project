import { useState } from 'react'
import type { Todo } from './types/Todo'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), title: text, completed: false };
    setTodo([...todo, newTodo]);
  }

  const toggleTodo = (id: number) => {
    setTodo(
      todo.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  }

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((t) => t.id !== id));
  }


  return (
    <>
      <h1>Todo List</h1>
      <TodoInput  onAdd={addTodo} />
      <TodoList todos={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
