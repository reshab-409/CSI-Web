import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Body from './Components/Body1/Body';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Header />
        <Home/>
        <Body/>
        {/* <Routes> */}
          {/* <Route path='/' element={<Header />} /> */}
        {/* </Routes> */}
        <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
