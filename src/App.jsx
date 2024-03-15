import {Route ,Routes} from 'react-router-dom'
import AddNote from './pages/AddNote'
import Home from './pages/Home'
function App(){
  return <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="/addnote" element={<AddNote />}/>

  </Routes>
}
export default App