import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/components/Home";
import {Header} from "./pages/shared/Header/Header";
function App() {
  return (
    <div className="container">
        <Header />
          <Routes>
            <Route path="/" Component={Home}/>
          </Routes>
    </div>
  );
}

export default App;
