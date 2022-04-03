import { Routes, Route } from "react-router-dom"
import Article from './pages/articles/Article'
import Articles from './pages/articles/Articles'
import Account from './pages/users/Account'
import Profile from './pages/users/Profile'
import Login from './pages/users/Login'
import Feed from './pages/feed'
import Register from './pages/users/Register'
import Homepage from './pages/Homepage'
import ProtectedRoutes from "./components/home/ProtectedRoutes"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/articles" element={<Articles />} />
      <Route exact path="/articles/:id" element={<Article />} />
      <Route element={<ProtectedRoutes />}>
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/profile" element={<Profile />} />
      </Route>
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/Login" element={<Login />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}

export default App;
