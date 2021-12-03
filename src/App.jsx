import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import './styles/common.scss'
import './styles/form.scss'
import Signup from "./pages/Signup";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact/>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path={`/lista/:listId`} element={<List />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
