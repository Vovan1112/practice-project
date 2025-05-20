import type { Todo } from "../types/Todo";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.title}
          </span>
          <button className="ml-6" onClick={() => deleteTodo(todo.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
