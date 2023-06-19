import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import StudentList from "./components/StudentList";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <StudentList />
      </div>
    </Provider>
  );
}

export default App;
