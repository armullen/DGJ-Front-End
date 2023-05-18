import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Journal from './pages/Journal';
import MyGarden from './pages/MyGarden';
import PlantList from './pages/PlantList';
import Footer from './components/Footer';
import Header from './components/Header';
import January from './pages/January';
import February from './pages/February';
import March from './pages/March';
import April from './pages/April';
import May from './pages/May';
import June from './pages/June';
import July from './pages/July';
import August from './pages/August';
import September from './pages/September';
import October from './pages/October';
import November from './pages/November';
import December from './pages/December';
import Monthly from './components/Monthly';
import NoteBar from './components/noteBar';

function App() {
  return (
    <div className = "App">
      <NoteBar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/mygarden' element={<MyGarden />} />
        <Route path='/plantlist' element={<PlantList />} />
        <Route path ='/january' element={<January />} />
        <Route path ='/february' element={<February />} />
        <Route path ='/march' element={<March />} />
        <Route path='/april' element={<April />} />
        <Route path='/may' element={<May />} />
        <Route path='/june' element={<June />} />
        <Route path='/july' element={<July />} />
        <Route path='/august' element={<August />} />
        <Route path='/september' element={<September />} />
        <Route path='/october' element={<October />} />
        <Route path='/november' element={<November />} />
        <Route path='/december' element={<December />} />
      </Routes> 
      <Footer />
    </div>
    

  )
}

export default App;
