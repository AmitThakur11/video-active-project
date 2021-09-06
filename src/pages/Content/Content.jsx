import "./Content.css";
import SideBar from "./SideBar";
// import Home from "./Home"
const Content = () => {
  return (
    <section className="content-container">
      <SideBar />
      <div className="content">
        {/* <Home/> */}
      </div>
    </section>
  );
};

export default Content;
