import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './Components/LoginForm/Register';
import AuthDetails from './Components/LoginForm/Auth';

function App() {
  return (
    <div>
      <LoginForm />
      
      {/* Trying to use browser router but it did't work*/}
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm />}/>
        </Routes>
      </BrowserRouter> */}
      
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;
