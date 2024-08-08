import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
interface Todo{
    id: number;
    task: string;
    description: string;
    is_completed: boolean;
}
export default function FoodDataList() {
    const {id} = useParams();
    const [todo ,setTodo] = useState<Todo>();
    useEffect (() => {
        fetch('/api/todos/'+ id)
     .then(response => response.json())
     .then(json => setTodo(json))
     .finally(() => console.log('api call completed')); 
    },[id]);
  return (
    <div>
      <h1>
        Food details
      </h1>
      <p>
        Food id : {id}
      </p>
      <p>
        Food Title : {todo?.task}
      </p>
      <div>
        {
            JSON.stringify(todo)
        }
      </div>
    </div>
  );
}
