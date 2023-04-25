import { BrowserRouter, Routes, Route, useActionData } from "react-router-dom";
import Main from "./pages/Detail";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { FaUikit } from "react-icons/fa";
import { useState } from "react";
import Intro from "./components/Intro";

function App() {
  const [account, setAccount] = useState();

  return (
    <BrowserRouter>
      <div className="bg-gray-950 min-h-screen text-white">
        <Header account={account} setAccount={setAccount} />
        <Intro />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
