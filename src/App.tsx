import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./ui/pages/Detail";
import Home from "./ui/pages/Home";
import Post from "./ui/pages/Post";
import Search from "./ui/pages/Search";
import Wish from "./ui/pages/Wish";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
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
    </BrowserRouter>
  );
}

export default App;
