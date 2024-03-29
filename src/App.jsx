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
import Login from "./components/login/Login";

function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [userInfo, setUserInfo] = useState(false)

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const [likedProduct, setLikedProduct] = useState(null);

  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${token}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ecommerce0003.pythonanywhere.com/user/retrieve/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUser(result)
      })
      .catch((error) => console.error(error));
  };

  const getLiked = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://ecommerce0003.pythonanywhere.com/action/liked/", requestOptions)
      .then((response) => response.json())
      .then((result) => setLikedProduct(result))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getUser();
    getLiked();
  }, [token])

  return (
    <>
      <BrowserRouter>
        <Login
          user={user}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setToken={setToken}
          login={login}
          setLogin={setLogin}
          signUp={signUp}
          setSignUp={setSignUp}
          setLoading={setLoading}
        />
        <Navbar setUserInfo={setUserInfo} user={user} setSearch={setSearch} setLogin={setLogin} />
        {loading && <Loader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:type"
            element={<Filter likedProduct={likedProduct} search={search} setLoading={setLoading} />}
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
