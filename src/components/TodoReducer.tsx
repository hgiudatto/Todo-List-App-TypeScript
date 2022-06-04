import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
import { Todo } from "../model";

type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const TheTodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoReducer = () => {
  // const [state, dispatch] = useReducer(TheTodoReducer, []);

  return <div>TodoReducer</div>;
};

export default TodoReducer;
