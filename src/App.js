import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in.route';
import SignUp from './routes/sign-up/sign-up.route';
import Home from './routes/home/home.route';
import Navigation from './components/navigation.component';
import ProtectedRoutes from './components/protected-route';
import ProfilePage from './routes/profile-page/profile-page.routes';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<ProtectedRoutes/>} >
            <Route path='/home' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='/home/profile' element={<ProfilePage />} />
            </Route> 
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
