import { Fragment, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

/**
 * * TypeScript Basics
 */
/* let name: string;
name = "Ettore";

Union
let age: number | string;

age = "Twenty two"; // * or age = 22 => it's ok likewise

Define a function
function printName(name: string) {
  console.log(name);
}
printName(name);

Functon type -> void returns undefined
let showAge: (age: string) => void;
never doesn't return anything
let showPersonAge: (age: string) => never;

Recomended instead of any
let personNae: unknown;

let isStudent: boolean;

String array
let hobbies: string[];
hobbies = ["Football", "Read", "Jogging"];

Tuples
let role: [number, string];
role = [4, "Ettore"];

Object
type Person_A = {
  name: string;
  age?: number;
};
let person: Person_A = {
  name: "Ettore",
};

let ltsOfPeople: Person_A[];


type X = {
  a: string;
  b: number;
}
interface Person extends X {
  name: string;
  age?: number;
}

interface Guy extends Person {
  professon: string;
}

type Y = {
  c: string;
  d: number;
}; */

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(`Todos: `, todos);

  return (
    <div className="App">
      <>
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        {/* {todos.map((t) => {
          return (
            <ul>
              <li>{t.todo}</li>
            </ul>
          );
        })} */}
        <TodoList todos={todos} setTodos={setTodos} />
      </>
    </div>
  );
};

export default App;
