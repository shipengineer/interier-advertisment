import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import Index from "./pages/Index";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} exact element={<Navigate to={"/index"} replace />} />
      <Route path={"/index"} element={<Index />} />
      <Route path={"/technology"} element={<TechnologyPage />} />

      {/* <Route path={'/about-me'} element={<AboutMe />} /> */}

      {/* <Route path={'/contact-me'} element={<ContactMe />} /> */}

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
