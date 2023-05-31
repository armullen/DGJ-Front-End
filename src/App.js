import './App.css';
import { Route, Routes } from 'react-router-dom'

import NoteBar from './components/noteBar';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import Journal from './pages/Journal';
import JournalEntryShow from './pages/JournalEntryShow';
import JournalDelete from './pages/JournalDelete';
import JournalEdit from './pages/JournalEdit';

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

import MyGarden from './pages/MyGarden';

import PlantList from './pages/PlantList';
import PlantShow from './pages/PlantShow';
import PlantDelete from './pages/PlantDelete';
import PlantEdit from './pages/PlantEdit';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className = "App">
      <NoteBar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* ......................journal routes...................... */}
        <Route path='/journal'>
          <Route path = '' element={<Journal />} />
            <Route path=':entryId'>
              <Route path='' element={<JournalEntryShow />} />
              <Route path="delete" element={<JournalDelete />} />
              <Route path="edit" element={<JournalEdit />} />
          </Route>
        </Route> 
       

       {/* ........................plant library routes.................... */}
        <Route path='/plantlist'>
          <Route path ='' element={<PlantList />} />
            <Route path= ':plantId'>
              <Route path='' element={<PlantShow />} />
              <Route path="delete" element={<PlantDelete />} />
              <Route path="edit" element={<PlantEdit />} />
          </Route>
        </Route>
        
        {/* ..................monthly routes........... */}
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

        {/* ..................auth routes.................. */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      
      {/* ....................my garden routes.................... */}
        <Route path='/mygarden' element={<MyGarden />} />

      </Routes> 
      <Footer />
    </div>
    

  )
}

export default App;
