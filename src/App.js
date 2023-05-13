
import './App.css';
import Form from './Form';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from './Details';
import Update from './Update';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Form/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
