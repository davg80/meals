import { Routes, Route } from "react-router-dom"
import Article from './pages/articles/Article'
import Articles from './pages/articles/Articles'
import Account from './pages/users/Account'
import Profile from './pages/users/Profile'
import Login from './pages/users/Login'
import Register from './pages/users/Register'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/articles" element={<Articles />} />
      <Route exact path="/articles/:id" element={<Article />} />
      <Route exact path="/account" element={<Account />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
