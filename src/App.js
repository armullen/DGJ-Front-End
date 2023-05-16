import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Journal from './pages/Journal';
import MyGarden from './pages/MyGarden';
import PlantList from './pages/PlantList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className = "App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/mygarden' element={<MyGarden />} />
        <Route path='/plantlist' element={<PlantList />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App;
