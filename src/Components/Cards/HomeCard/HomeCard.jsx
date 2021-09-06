import "./HomeCard.css";

const HomeCard = () => {
  return (
    <section className="home-video-card">
      <div className="hv-thumbnail">
        <img
          src="https://i.ytimg.com/vi_webp/K92x1YUwTrY/maxresdefault.webp"
          alt="/"
        />
      </div>
      <div className="hv-author-img">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLSUZkxqm8jM-pksxqglNSrj26OSdp9xWruAZymDSQ=s88-c-k-c0x00ffffff-no-rj"
          alt="/"
        />
      </div>
      <div className="hv-title">
        This is the Most Affordable Foldable Flagship Phone !
      </div>
      <div className="hv-name">Tech burner</div>
    </section>
  );
};
export default HomeCard;
