import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <StudentList />
        <hr />
        <AddStudentForm />
      </div>
    </Provider>
  );
}

export default App;
