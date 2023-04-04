import Home from "./Home/home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import FrontPage from "./Front/frontPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route exact path="/Home" element={<Home />} />
          {/* <Route exact path="/women" element={<Women />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
