import Layout from "./components/Layout"
import './App.css';
import Result from "./components/pages/Result";
import Quiz from "./components/pages/Quiz";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {AuthProvider} from "./Context/AuthContext"



function App() {
  return (
    <Router>
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/> }/>
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/quiz" element={<Quiz/>} />
          <Route exact path="/result" element={<Result/>} />
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
