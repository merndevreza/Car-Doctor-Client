import { Outlet } from "react-router-dom";
import Header from "../Pages/shared/Header/Header";
import Footer from "../Pages/shared/Footer/Footer";

const Root = () => {
   return (
      <div className="container mx-auto">
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;