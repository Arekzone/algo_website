import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Main from "./Components/Main.js";
import React from "react";

function App() {

  return (
    
    <BrowserRouter>
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Main/>}></Route>
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
