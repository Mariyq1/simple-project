import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Counter from './pages/counter/Counter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/counter" element={<Counter/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
