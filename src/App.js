import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import CategoryFilter from "./Pages/CategoryFilter/CategoryFilter";
import SearchResults from "./Pages/SearchResults/SearchResults";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import LogOut from "./Pages/Login/LogOut";
import UserProfile from "./Pages/UserProfile/UserProfile";
import { SearchProvider } from "./Components/NavBar/SearchContext";
import { AuthProvider } from "./Pages/Login/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <SearchProvider>
            <NavBar />
            <div className="main">
              <SideBar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/logout" element={<LogOut />} />
                <Route exact path="/items/:slug" element={<CategoryFilter />} />
                <Route
                  exact
                  path="/search/:query"
                  element={<SearchResults />}
                />
                <Route exact path="/user/:userId" element={<UserProfile />} />
              </Routes>
            </div>
          </SearchProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
