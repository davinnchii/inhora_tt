import { Todo } from '../types/todo';
import React from 'react';
import { useAppSelector } from '../hooks';

interface Props {
  todo: Todo;
  onCheck: (id: number | string) => void;
  onDelete: (id: number | string, isDeleted?: boolean) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onCheck, onDelete }) => {
  const todos = useAppSelector(state => state.todos);
  const { deleted } = todos;
  const isDeleted = deleted.some(({ id }) => todo.id === id);
  return (
    <div className="flex justify-between bg-amber-100 py-4 px-6 rounded-sm">
      <input
        type="checkbox"
        name="completed"
        disabled={isDeleted}
        checked={todo.completed}
        onChange={() => onCheck(todo.id)}
        className={`peer w-5 h-5 border rounded-full border-pink-400 ${!isDeleted ? 'cursor-pointer' : ''} checked:bg-pink-600`}
      />
      <p className={`${todo.completed ? 'line-through' : ''}`}>{todo.title}</p>
      <button type="button" onClick={() => onDelete(todo.id, isDeleted)}>
        {isDeleted ? 'Undo' : 'Delete'}
      </button>
    </div>
  )
}
