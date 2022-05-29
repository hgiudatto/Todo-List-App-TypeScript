import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
    </form>
  );
};

export default SingleTodo;
