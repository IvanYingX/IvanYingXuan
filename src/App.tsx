import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
