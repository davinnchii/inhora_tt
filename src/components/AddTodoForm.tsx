import React, { FormEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTodo } from '../redux/todoSlice';


export const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useAppDispatch();
  const handleChangeTodoTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  }
  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todoTitle) {
      dispatch(addTodo(todoTitle));
      setTodoTitle('');
    }
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input
        className="w-full border-blue-400 outline"
        type="text"
        value={todoTitle}
        onChange={handleChangeTodoTitle} />
    </form>
  )
}
