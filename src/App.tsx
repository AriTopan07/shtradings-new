import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ServiceDetail from "./ServiceDetail";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}
