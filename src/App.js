import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
