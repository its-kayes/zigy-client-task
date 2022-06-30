import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import DeleteUser from "./components/DeleteUser";
import Home from "./components/Home";
import UserAdd from "./components/UserAdd";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/useradd" element={<UserAdd> </UserAdd>}> </Route>
        <Route path="/deleteuser" element={<DeleteUser> </DeleteUser>}> </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
