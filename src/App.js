import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Footer from './components/layout/Footer';

//components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Auth/Home';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Container from './components/layout/Container'
import Message from './components/layout/Message';
import Profile from './components/pages/User/Profile';
//context
import {UserProvider} from './context/UserContext'

function App() {
  return (
    <Router>
      <UserProvider>
      <Navbar/>
      <Message/>
      <Container>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/user/profile' element={<Profile></Profile>} ></Route>
          <Route path='/' element={<Home></Home>} ></Route>
        </Routes>
      </Container>
      <Footer/>
      </UserProvider>
    </Router>
    
  );
}

export default App;
