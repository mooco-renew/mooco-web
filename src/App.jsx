import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './screen/main/MainPage';
import CreatePage from './screen/barcord/createPage';
import GetPage from './screen/barcord/getPage';

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
    <Route path='/' element={<MainPage />} />
    <Route path='/create-barcord' element={<CreatePage />} />
    <Route path='/get-barcord' element={<GetPage />} />
  </Routes>
  )
}

export default App
