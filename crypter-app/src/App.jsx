import HomePage from "./Components/Home";
import Discover from './Components/Discover'
import Authentication from './Components/Authentication'
import * as React from "react";
import Layout from './Components/Layout'
import NoPage from "./Components/NoPage";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Connect_Wallet from './Components/Connect_wallet'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="Discover" element={<Discover />} />
            <Route path="Authentication" element={<Authentication />} />
            <Route path="Connect_Wallet" element={<Connect_Wallet />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
