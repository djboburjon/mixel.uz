import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Filter from "./pages/filter/Filter";
import CheaperCards from "./components/cheaperCards/CheaperCards";
import InfoCard from "./pages/infoCard/InfoCard";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://ecommerce0003.pythonanywhere.com/main/products/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:type" element={<Filter data={data} />} />
          <Route path="/filter/:id" element={<InfoCard/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
