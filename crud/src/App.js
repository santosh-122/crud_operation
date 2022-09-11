import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Edit from './component/Edit';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route exact  path="/" element={<Home/>}/> 
      <Route exact  path="/Edit" element={<Edit/>}/> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
