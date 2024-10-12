import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddingPage from './component/AddingPage';
import Home from './component/Home';
import UpdateList from './component/UpdateList';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<AddingPage/>} />
      <Route path='/note/:listID' element={<UpdateList/>} />
    </Routes>
    </BrowserRouter>
  )
}


export default App;
