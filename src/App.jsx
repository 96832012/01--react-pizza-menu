import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'

function App() {
  return <div>
    <Header />
    <Menu />
    <Footer />
  </div>;
};

export default App;
