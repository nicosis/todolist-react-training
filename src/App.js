import "./App.css";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1>to do list</h1>
      <ToDoList />
    </div>
  );
}

export default App;
