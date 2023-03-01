import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowBookList from './components/ShowBookList';
import CreateBook from './components/CreateBook';
import Posts from './pages/Posts';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create-book' element={<CreateBook />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/posts/:id' element={<EditPost />} />


        {/* <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
        <Route path='/show-book/:id' element={<ShowBookDetails />} /> */}
      </Routes>
    </Router>
  );
};

// How to setup react-router-dom?
export default App;