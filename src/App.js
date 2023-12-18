import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Web from "./pages/Web";
import Posts from "./pages/Posts";
import Mobile from "./pages/Mobile";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Web />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<SinglePost />} />
    </Routes>
  );
}
export default App;
