import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Footer from './Components/Footer'
import Rent from './Components/Rent';
import Navbar from './Components/Navbar'
import Profile from './Components/Profile';
import Car from './Components/Pages/Car';
import Details from './Components/Pages/Details';
import Myreservations from './Components/Myreservations';
import { useState } from 'react';
import AuthContext from './Components/AuthContext';
import Signup from './Components/Pages/SignUp';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='App'>
       <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/car" element={<Car />} /> 
            <Route path="/details/:id" element={<Details />} />
            <Route path="/myreservations/" element={<Myreservations />} />
            <Route path="/signUp" element={<Signup />} />
          </Routes>
       </AuthContext.Provider>
     
      {/* <Footer /> */}
    </div>
  );
}

export default App;
