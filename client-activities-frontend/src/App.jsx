import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AppPage from "./pages/AppPage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
