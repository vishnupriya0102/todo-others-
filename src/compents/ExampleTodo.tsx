import { useEffect, useState } from 'react';

interface Todo {
    title: string;
    content:string;
    author: string;
    //   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
}

export default function ExampleTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    //fetch('https://jsonplaceholder.typicode.com/todos')
    fetch('/api/posts/sql/get-all')
      .then(response => response.json())
      .then(data => setTodos(data.results))
      .catch(error => console.error('Error fetching data:', error))
      .finally(() => console.log('Fetch completed'));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.title}>
            <h3>{todo.title}</h3>
            {/*<p>Completed: {todo. ? 'Yes' : 'No'}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

        //  fetch('https"//jsonplaceholder.typicode.com/todos',{
        //      method:'GET',
        //      headers: {
        //          'content-Type': 'application/json',
        //          Authorization:'Bearer $(auth_token)',
        //      }
        //  })
    
        //fetch('https://jsonplaceholder.typicode.com/todos')
        