import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Sidebar from "@components/sidebar/Sidebar";
// import SearchBar from "@components/searchBar/SearchBar";
//pages
import HomePage from "@/pages/HomePage";
import Tyontekijat from "@/pages/Tyontekijat";
import Tuntikirjia from "@/pages/Tuntikirjia";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <div className="flex-none w-20 ">
            <Sidebar />
          </div>
          <main className="app-main ">
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="/koti" element={<HomePage />} />
              <Route path="/tyontekijat" element={<Tyontekijat />} />
              <Route path="/tuntikirja" element={<Tuntikirjia />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
