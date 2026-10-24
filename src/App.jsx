import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';

function App() {
// - Sign Up: /signup
// - Login: /login (and the default /)
  return window.location.pathname === '/signup' ? <SignUp /> : <Login />
}

export default App
