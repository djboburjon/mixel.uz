import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Filter from "./pages/filter/Filter";
import CheaperCards from "./components/cheaperCards/CheaperCards";
import InfoCard from "./pages/infoCard/InfoCard";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("")

  return (
    <>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:type"
            element={<Filter search={search} setLoading={setLoading} />}
          />
          <Route
            path="/filter/:id"
            element={<InfoCard setLoading={setLoading} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
