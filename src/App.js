import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Counter from './pages/counter/Counter';
import Quiz from './pages/quiz/Quiz';
import UsersList from './pages/users/UsersList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/quiz" element = {<Quiz/>}/>
          <Route path="/users" element = {<UsersList/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
