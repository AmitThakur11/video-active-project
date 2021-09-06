import "./Content.css";
import SideBar from "../../Components/SideBar/SideBar";
import Home from "../Home/Home"
const Content = () => {
  return (
    <section className="content-container">
      <SideBar />
      <div className="content">
        <Home/>
      </div>
    </section>
  );
};

export default Content;
