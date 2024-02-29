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
  const [data, setData] = useState([
    {
      id: 0,
      imgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAkFsDOQVR4RjB3P4rMGT77DIzeXmRcRILoy1yb1ivQl1KL-C3SvbX5-z1J1lLTE5Gew&usqp=CAU",
        "https://kattabozor.s3.eu-central-1.amazonaws.com/ri/1eade9b409be0e83a7a21bdcee32631f2dd4ef82c4bfbc2d03afd0fb6ea1658d_pBNiog_640l.jpg",
        "https://images.uzum.uz/ck8nl5sjvf2h3ge4pmd0/t_product_240_high.jpg",
        "https://assets.asaxiy.uz/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2021082113003866868xL7jtdQ0gC.jpg.webp",
      ],
      img: "https://assets.asaxiy.uz/product/main_image/desktop//659911dd9cd6e.jpg",

      name: "Kir moshina",
      description: "asdasd",
      price: 3000000,
      amount: 24,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },

      discount: 20,
      guaranty: 2,
      deliver: true,
      owner: null,
      brand: "Artel",
      battery: null,
      country: "uzbekistan",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 1,
      imgs: [
        "https://assets.asaxiy.uz/product/items/desktop/a10390358cde813f75ac203ed7b164ed2020070912090693681FdiJs7LGuL.jpg.webp",
        "https://www.gazeta.uz/media/img/2017/05/vMxCsI14954551613181_b.jpg",
        "https://kattabozor.s3.eu-central-1.amazonaws.com/ri/03ebb6f6c992325d789db83c47d8171602b0b3770fe499eb9bfed1ccf256b05b_eGy7g8_640l.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-b8_4ET-ZkWf4jOWVTBjN0EW--MqJPHsDCOwul7P6rDqk4DIY6i29bhYQT6yO_Zfris&usqp=CAU",
      ],
      img: "https://assets.asaxiy.uz/product/items/desktop/a10390358cde813f75ac203ed7b164ed2020070912130632748YMGMS6rNUL.jpg.webp",
      name: "Konditsioner",
      description: "asdasd",
      price: 2000000,
      amount: 20,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },
      discount: 10,
      guaranty: 2,
      deliver: true,
      owner: null,
      brand: "Avalon",
      battery: null,
      country: "uzbekistan",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 2,
      imgs: [
        "https://static.re-store.ru/upload/resize_cache/iblock/233/560_280_140cd750bba9870f18aada2478b24840a/1ww3xi6oklt0cxpkct20x1npz7iixw4q.jpg",
        "https://msk.stores-apple.com/upload/resize_cache/iblock/969/450_450_140cd750bba9870f18aada2478b24840a/vhfog63ozgs3jitk8sbkygsuafj9lgl7.jpg",
        "https://imgproxy.sbermarket.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI4ODIwMzk3L29yaWdpbmFsLzQvMjAyMy0xMi0xMVQxMyUzQTI1JTNBMzYuNzgzMjA2JTJCMDAlM0EwMC8yODgyMDM5N180LmpwZw==.jpg",
        "https://ipiter.ru/upl/modules/shop/360/xhad9oqdde.jpg",
      ],
      img: "https://assets.asaxiy.uz/product/items/desktop/5751ec3e9a4feab575962e78e006250d2023092315141339805ZzWfkPMMFW.png.webp",
      name: "Iphone 15 pro",
      description: "asdasd",
      price: 15000000,
      amount: 60,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },
      discount: 15,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Apple",
      battery: "4500",
      country: "USA",
      subCategory: {
        id: 1,
        name: "Telephone",
        category: {
          id: 1,
          name: "texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 3,
      imgs: [
        "https://olcha.uz/image/original/products/2022-07-27/noutbuk-hp-probook-440-g8-i5-1135g7-16512gb-ssd-14-2r9d0ea-86465-3.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxk_Ub-KQdlJ0HaQlBZTiGzfi3riO6G-qbMTB_KGihvW3MYiqX-fndW8fGNtev2_T87k&usqp=CAU",
        "https://pcmarket.uz/wp-content/uploads/2023/10/c08473465-600x600.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzl9YX2loV9SeRyQQaM11rsulFoB4rPulwzqv7YIWx5Fv8peeQz2QYedqc48cbhDMKxs&usqp=CAU",
      ],
      img: "https://assets.asaxiy.uz/product/items/desktop/69a89c5e6a722eb5cc98c0f4a431ab7c2022112912272643093gYTuK1X6Z5.jpg.webp",
      name: "Hp probook",
      description: "asdasd",
      price: 7000000,
      amount: 20,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },
      discount: 5,
      guaranty: 1.5,
      deliver: true,
      owner: null,
      brand: "Hp",
      battery: "10000",
      country: "USA",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 4,
      imgs: [
        "https://assets.asaxiy.uz/product/items/desktop/c81e728d9d4c2f636f067f89cc14862c2022101310571842080bagOfp8Ue1.jpg.webp",
        "https://assets.asaxiy.uz/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b2021081414510898138M1S0KWsWb7.jpeg.webp",
        "https://assets.asaxiy.uz/product/items/desktop/c81e728d9d4c2f636f067f89cc14862c2021081414510898373xnCFelWpAr.jpeg.webp",
        "https://www.prom.uz/_ipx/f_webp/https://devel.prom.uz/upload/reduced/product_logos/34/b3/34b31d62bd2b36fd010386522fd5d70b.jpg",
      ],
      img: "https://assets.asaxiy.uz/product/main_image/desktop//6347a8bbbb78b.jpg.webp",
      name: "Muzlatgich",
      description: "asdasd",
      price: 5000000,
      amount: 34,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },
      discount: 10,
      guaranty: 3,
      deliver: true,
      owner: null,
      brand: "LG",
      battery: null,
      country: "Korea",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 5,
      imgs: [
        "https://tezz.uz/uploads/images/product/559/206174.jpg",
        "https://femas.uz/assets/images/gaz-pliti/6022ee.jpg",
        "https://connect-nano.uz/storage/products/February2022/8ITi6Js2W5OEBsmjacz3.jpg",
        "https://www.creditasia.uz/upload/iblock/c0b/plita-gazovaya-gorenje-gn-51101-iw-1.jpg",
      ],
      img: "https://assets.asaxiy.uz/product/items/desktop/ec96f542f20153a2e8c5903a90d020e42020012212344558822xA2y79w5Km.jpg.webp",
      name: "gaz plita",
      description: "asdasd",
      price: 1500000,
      amount: 20,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },
      discount: null,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Artel",
      battery: null,
      country: "uzbekistan",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 6,
      imgs: [
        "https://static-01.daraz.pk/p/7a1153909e726f543cba63aeb4e715bf.jpg_750x750.jpg_.webp",
        "https://content2.rozetka.com.ua/goods/images/big_tile/382344912.jpg",
        "https://images.prom.ua/4360597992_w640_h640_umnye-smart-chasy.jpg",
        "https://images.prom.ua/4991258647_w600_h600_4991258647.jpg",
      ],
      img: "https://assets.asaxiy.uz/product/main_image/desktop//6525212d4e46f.jpg.webp",
      name: "smart watch",
      description: "asdasd",
      price: 500000,
      amount: 60,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },
      discount: null,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Xiaomi",
      battery: "1821",
      country: "xitoy",
      subCategory: {
        id: 1,
        name: "Home and garden",
        category: {
          id: 1,
          name: "Maishiy texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
    {
      id: 7,
      imgs: [
        "https://static.re-store.ru/upload/resize_cache/iblock/233/560_280_140cd750bba9870f18aada2478b24840a/1ww3xi6oklt0cxpkct20x1npz7iixw4q.jpg",
        "https://msk.stores-apple.com/upload/resize_cache/iblock/969/450_450_140cd750bba9870f18aada2478b24840a/vhfog63ozgs3jitk8sbkygsuafj9lgl7.jpg",
        "https://imgproxy.sbermarket.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI4ODIwMzk3L29yaWdpbmFsLzQvMjAyMy0xMi0xMVQxMyUzQTI1JTNBMzYuNzgzMjA2JTJCMDAlM0EwMC8yODgyMDM5N180LmpwZw==.jpg",
        "https://ipiter.ru/upl/modules/shop/360/xhad9oqdde.jpg",
      ],
      img: "https://assets.asaxiy.uz/product/items/desktop/5751ec3e9a4feab575962e78e006250d2023092315141339805ZzWfkPMMFW.png.webp",
      name: "Iphone 13 pro",
      description: "asdasd",
      price: 15000000,
      amount: 60,
      parametr: {
        name: "Kir moshina",
        status: "new",
      },
      info: {
        productNumber: "Nh245fj",
      },
      display: {
        surface: "matovi",
        touchScreen: false,
        frameRate: "60HZ",
        matrixType: "IPS",
        permission: "Full HD 1920x1080 Пикселей",
        diagonal: "15.6",
      },

      protsessor: {
        brand: "Intel®",
        family: "Core™ i7",
        model: "1165G7",
        generation: "11",
        numberOfCores: "4",
        numberOfthreads: "8",
        minimumFrequency: "2.8 ГГц",
        maximumFrequency: "4.7 ГГц",
        cache: "12 Мб",
        videoCard: "Intel® Iris® Xe Graphics",
      },
      ram: {
        type: "DDR4",
        size: "4Gb",
      },
      discount: 15,
      guaranty: 1,
      deliver: true,
      owner: null,
      brand: "Apple",
      battery: "3000",
      country: "USA",
      subCategory: {
        id: 1,
        name: "Telephone",
        category: {
          id: 1,
          name: "texnika",
        },
      },
      created_at: "2024-02-14T12:15:57.889009Z",
      updated_at: "2024-02-14T13:09:09.009448Z",
    },
  ]);

  const getData = async () => {
    const req = await fetch("https://ecommerce0002.pythonanywhere.com/main/products/")
    const data = await req.json()
    console.log(data);
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:type" element={<Filter data={data} />} />
          <Route path="/filter/:id" element={<InfoCard data={data} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
