import Header from "./Components/Header/Header"

import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage'
import ContactsPage from "./Pages/ContactsPage"
import LoginPage from './Pages/LoginPage';
import RegistrPage from './Pages/RegistrPage'
import RezervType from './Pages/RezervType'


import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/reg" element={<RegistrPage />}/>

          <Route path="/rez_type" element={<RezervType />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
