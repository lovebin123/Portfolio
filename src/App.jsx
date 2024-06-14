import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='App'>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
