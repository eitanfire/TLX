import './App.css';
// import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
// import React, { useState } from 'react';
import TheTeachersLounge from './pages/TheTeachersLounge';
// import Modal from './components/Modal';
// import { Routes, Route } from 'react-router-dom';
// import ContactPage from './pages/ContactPage';
// import HomePage from './pages/HomePage';
import PremiumContent from './pages/PremiumContent';
// import FreeContent from './pages/FreeContent';
import LessonPlansDirectoryPage from './pages/LessonPlansDirectoryPage';

function App() {
  // const [show, setShow] = useState(false)
  return (
    <div className="App">
        <Header className='col col-12' />
        <LessonPlansDirectoryPage />
        <PremiumContent />
        <TheTeachersLounge />
        {/* <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
          <p>This is modal body</p>
        </Modal> */}
        <Footer />
    </div>
  );
}

export default App;

{/* <Routes>
<Route path='/' element={<HomePage />} />
<Route path='contact' element={<ContactPage />} />
<Route path='free' element={<FreeContent />} />
<Route path='paid' element={<PremiumContent />} />
<Route path='lounge' element={<TheTeachersLounge />} />
</Routes> */}