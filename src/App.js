import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/authorization" element={<AuthorizationPage />}></Route>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
