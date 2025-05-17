import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
const Body = () => {
  return (
    <div>
        <NavBar />
        <Outlet />    {/*all children routes will be render here  */}
        <Footer />
    </div>
  )
}

export default Body;