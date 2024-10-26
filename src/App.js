// frontend/src/App.js


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import ViewDigitalID from './Components/ViewDigitalID/ViewDigitalID'; // Ensure this path is correct
import IDCard from './Components/IDCard/IDCard';
import PropertyList from './Components/PropertyList/PropertyList';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
import Login from './Pages/Login';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path='/ViewDigitalID' element={<ViewDigitalID/>}/>
          <Route path='/IDCard/:phone' element={<IDCard/>}/>
          <Route path='/PropertyList' element={<PropertyList />}/>
          <Route path='/property/:id' element={<PropertyDetails />} />
  

        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
