import "./HomeCard.css";

const HomeCard = ({video}) => {
  return (
    <section className="home-video-card">
      <div className="hv-thumbnail">
        <img
          src={video.thumbnail}
          alt="/"
        />
      </div>
      <div className="hv-author-img">
        <img
          src={video.creatorUrl}
          alt="/"
        />
      </div>
      <div className="hv-title">
        {video.title}
      </div>
      <div className="hv-name">{video.creator}</div>
    </section>
  );
};
export default HomeCard;
