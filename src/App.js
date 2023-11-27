import "./css/main.css";
import DisplayTodo from "./components/DisplayTodo";
import TitleName from "./components/TitleName"

function App() {
  return (
    <div className="App">
      <h1>
        My Todo
      </h1>
      <div>
        <TitleName />
        <DisplayTodo />
      </div>
    </div>
  );
}

export default App;