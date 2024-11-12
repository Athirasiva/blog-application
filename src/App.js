import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ViewBlog from './Components/ViewBlog';
import AddBlog from './Components/AddBlog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ViewBlog />}  />
        <Route  path='/addblog' element={<AddBlog />}/>
      </Routes>
    </div>
  );
}

export default App;
