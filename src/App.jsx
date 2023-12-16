import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main';
import Form from './components/add/Form';
import Dragable from './components/add/Dragable';
import Resp from './components/forms/Resp';
import Fill from './components/forms/Fill';
function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/add" element={<Form/>}/>
        <Route path="/feedback" element={<Resp/>}/>
        <Route path="/:id" element={<Fill/>}/>
      </Routes>
    </Router>
  )
}

export default App
