import HomePage from "./Components/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Layout from './Components/Layout'
import NoPage from "./Components/NoPage";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
