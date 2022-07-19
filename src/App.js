import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Show from "./Show";
import Edit from "./Edit";


function App() {
 return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Show/>}/>
    <Route path="/edit/:_id" element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
 )
}

export default App;