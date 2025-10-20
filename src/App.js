import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskPage />} />
      </Routes>
    </>
  );
}

export default App;
