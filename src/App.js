// import logo from './logo.svg
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Axios from './components/Axios';
import Post from './components/Post';
import Comments from './components/Comments';
import Demo from './components/Demo';
import LogOut from './components/LogOut';
import Photos from './components/Photos';


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Login />}> </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Demo" element={<Demo />}>
          <Route path="Comments" element={<Comments />} />
          <Route path="Post" element={<Post />} />
          <Route path="photos" element={<Photos />} />
          <Route path="LogOut" element={<LogOut />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
