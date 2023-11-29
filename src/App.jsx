/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FormPage from "./components/pages/form/FormPage";
import HomePage from "./components/pages/home/HomePage";
import NotFoundPage from "./components/pages/notfound/NotFoundPage";
import Navbar from "./components/shared/Navbar";
import ListPage from "./components/pages/list/ListPage";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
