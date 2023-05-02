import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Footer from './Components/Footer'
import Rent from './Components/Rent';
import Navbar from './Components/Navbar'
import Profile from './Components/Profile';
import Car from './Components/Pages/Car';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/car" element={<Car />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
