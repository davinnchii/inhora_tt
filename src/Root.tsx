import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import { TodoList } from './components/TodoList';
import { useAppSelector } from './hooks';
import { AddTodoForm } from './components/AddTodoForm';


export const Root = () => {
  const todoStore = useAppSelector(state => state.todos);
  const { todos, deleted } = todoStore;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={
            <>
              <AddTodoForm />
              <TodoList todos={todos} />
            </>
          } />
          <Route path={'deleted'} element={<TodoList todos={deleted} />} />
        </Route>
      </Routes>
    </Router>
  )
}
