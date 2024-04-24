import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
import { useAppDispatch } from '../hooks';
import { deleteTodo, toggleComplete, undoDelete } from '../redux/todoSlice';

interface Props {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  const dispatch = useAppDispatch();
  const handleCompleteTodo = (id: number | string) => {
    dispatch(toggleComplete(id));
  }

  const handleDeleteTodo = (id: number | string, isDeleted?: boolean) => {
    if (isDeleted) {
      dispatch(undoDelete(id));
      return;
    }
    dispatch(deleteTodo(id));
  }

  return (
    <div className="flex flex-col mt-10">
      {todos.map(todo => (
        <TodoItem todo={todo} onDelete={handleDeleteTodo} onCheck={handleCompleteTodo} key={todo.id} />
      ))}
    </div>
  )
}
