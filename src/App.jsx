import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './screen/main/MainPage';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Routes>
    <Route path='/' element={<MainPage />} >
    </Route>
  </Routes>
  )
}

export default App
