// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';


import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="">
      
      <NavBar/>
      <Outlet/>
      

     
      
    </div>
  );
}

export default App;
