import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import './Root.css'
import Footer from "../Footer/Footer";
const Root = () => {
    return (
      <div>
        <div className="manrope max-w-5xl mx-auto">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;