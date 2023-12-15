import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Services } from "./pages/Services";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/services*" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;