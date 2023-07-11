import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./main/Main";
import { About } from "./about/About";
import { Contact } from "./contacts/Contact";
import { Error } from "./error/Error";
import { Posts } from "./posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
