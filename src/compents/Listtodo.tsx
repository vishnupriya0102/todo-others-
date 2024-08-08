interface TodoItem {
  title: string;
  is_completed: boolean;
}

interface ListtodoProps {
  listtodo: TodoItem[];
}

export default function Listtodo({ listtodo }: ListtodoProps) {
  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <ul>
          {listtodo.map((todo) => (
            <li key={todo.title}>
              <input type="checkbox" checked={todo.is_completed} />
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}