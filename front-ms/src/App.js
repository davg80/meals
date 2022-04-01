import { Routes, Route } from "react-router-dom"
import Article from './components/articles/Article'
import Articles from './components/articles/Articles'
import Account from './components/users/Account'
import Profile from './components/users/Profile'
import Login from './components/users/Login'
import Register from './components/users/Register'
import Home from './components/Home'

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
