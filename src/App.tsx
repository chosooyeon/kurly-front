import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./ui/molecules/Footer/Footer";
import Header from "./ui/molecules/Header/Header";
import Detail from "./ui/pages/Detail";
import Home from "./ui/pages/Home";
import Post from "./ui/pages/Post";
import Search from "./ui/pages/Search";
import Wish from "./ui/pages/Wish";
import { isMobile } from "./service/hooks"
import MobileHeader from "./ui/molecules/Header/MobileHeader";
import MobileBottom from "./ui/molecules/Footer/MobileBottom";
import MyTopButton from "./ui/atoms/top/MyTopButton";

function App() {
  return (
    <BrowserRouter>
      { isMobile() ? <MobileHeader/> : <Header/> }
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/detail' element={<Detail />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/wish' element={<Wish />}/>
        <Route path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>빈 페이지 입니다</p>
            </main>}/>
      </Routes>
      { isMobile() ? <MobileBottom/> : <Footer/> }
      { isMobile() ? <></> : <MyTopButton/>}
    </BrowserRouter>
  );
}

export default App;
