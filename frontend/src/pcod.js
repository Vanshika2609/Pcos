import './App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import TopBar from './topbar/TopBar';
import Settings from './pages/settings/Settings';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const currentUser = true;
    return(
      <>
      <TopBar/>
      <Homepage/>
      <Login/>
      <Register/>
      </>
  );
}

export default App;
