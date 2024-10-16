import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/AboutSection/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
