import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <>
      <Post>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </Router>
      </Post>
    </>
  );
}


export default App;