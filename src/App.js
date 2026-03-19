import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/home";
import { Takeover } from "./pages/takeover";
import { Brands } from "./pages/brands";
import { Sell } from "./pages/sell";
import { Blogs } from "./pages/blogs";
import { FAQ } from "./pages/faq";
import { Case } from "./pages/case";
import { Hermes } from "./brands_pages/hermes";
import { Gucci } from "./brands_pages/gucci";
import { LouisVuitton } from "./brands_pages/LV";
import { Chanel } from "./brands_pages/chanel";
import { Prada } from "./brands_pages/prada";
import { Goyard } from "./brands_pages/goyard";
import { Fendi } from "./brands_pages/fendi";
import { Celine } from "./brands_pages/celine";
import { Dior } from "./brands_pages/dior";
import { Post1 } from "./blogs_page/Post1";
import { Post2 } from "./blogs_page/Post2";
import { Post3 } from "./blogs_page/Post3";
import { Post4 } from "./blogs_page/Post4";
import { Post5 } from "./blogs_page/Post5";
// import { Post } from "./blogs_page/Post";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/takeover&auth" element={<Takeover/>}/>
        <Route path="/howtosell" element={<Sell/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/case" element={<Case/>}/>

        {/* Brand */}
        <Route path="/brands" element={<Brands/>}/>
        <Route path="/brands/hermes" element={<Hermes/>}/>
        <Route path="/brands/gucci" element={<Gucci/>}/>
        <Route path="/brands/lv" element={<LouisVuitton/>}/>
        <Route path="/brands/chanel" element={<Chanel/>}/>
        <Route path="/brands/prada" element={<Prada/>}/>
        <Route path="/brands/goyard" element={<Goyard/>}/>
        <Route path="/brands/fendi" element={<Fendi/>}/>
        <Route path="/brands/celine" element={<Celine/>}/>
        <Route path="/brands/dior" element={<Dior/>}/>
  

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/post1" element={<Post1/>}/>
        <Route path="/blogs/post2" element={<Post2/>}/>
        <Route path="/blogs/post3" element={<Post3/>}/>
        <Route path="/blogs/post4" element={<Post4/>}/>
        <Route path="/blogs/post5" element={<Post5/>}/>
        {/* <Route path="/blogs/post" element={<Post/>}/> */}



      </Routes>
    </Router>
  );
}

export default App;