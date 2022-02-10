////import react from 'react';
//import React, {component} from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Articlelist from './components/article/ArticleList';
import Article from './components/article/Article';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Error from './components/error/Error';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
//import image from './components/image/image.png';


function App() {
  return (
   // <div  styles={{ backgroundImage:`url(${image})` }}>
    <Router>
     <>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/article-list" element={<Articlelist/>}/> 
        <Route path="/article/:name" element={<Article />}/> 
        <Route path="*" element={<Error/>}/> 

        </Routes>
       </>

        </Router>
        //</div>
   
  );
}

export default App;
 