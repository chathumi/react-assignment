import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <NavBar />
        <div className="content">         
           <Routes>
            <Route exact path="/" element={<TodoList />}>
              
            </Route>
            <Route  path="/login" element={<Login />}> </Route>   
            <Route  path="/signup" element={<SignUp />}> 
            </Route>           
          </Routes>
        </div>
   
      </div>
    </Router>
     
   
    </div>
  );
}

export default App;
