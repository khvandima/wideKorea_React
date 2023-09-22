import Header from "./Components/Header/Header"

import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage';
import RegistrPage from './Pages/RegistrPage'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reg" element={<RegistrPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
