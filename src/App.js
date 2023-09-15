import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in.route';
import SignUp from './routes/sign-up/sign-up.route';
import Home from './routes/home/home.route';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
