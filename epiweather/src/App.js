import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MyFooter from './Components/MyFooter';
import {Container} from 'react-bootstrap'
import NotFoundPage from './Pages/NotFoundPage';
import MyNav from './Components/MyNav';
import Meteo from './Pages/Meteo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/Meteo/:id' element={<Meteo />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
