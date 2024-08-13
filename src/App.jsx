import {Routes, Route} from "react-router-dom"

import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import SearchPage from "./components/pages/SearchPage";
import Navbar from "./components/common/Navbar";
import ShowNavbar from "./components/common/ShowNavbar";
function App() {
  return ( 
    <>
      <div>
        
        <ShowNavbar>
          <Navbar />
        </ShowNavbar>  
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="loginpage/" element={<LoginPage />} />
          <Route path="profilepage/" element={<ProfilePage />} />
          <Route path="profilepage/:id" element={<ProfilePage />} />
          <Route path="searchpage/" element={<SearchPage />} />
        </Routes>

      </div>
    </>
   );
}

export default App;