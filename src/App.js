import './App.css';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useState } from 'react';
import TheTeachersLounge from './pages/TheTeachersLounge';
import Modal from './components/Modal';

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Container>
        <Header className='col col-12' />
        <TheTeachersLounge />
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
          <p>This is modal body</p>
        </Modal>
        <Footer />
      </Container>
    </div>
  );
}

export default App;