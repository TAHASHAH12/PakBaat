import { Link } from "react-router-dom";
import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          {/* User Info */}
          <div className="user">
            <img src={"/upload/" + currentUser.profilepic} alt="" />
            <span>{currentUser.name}</span>
          </div>

          {/* First Menu */}
          <div className="item">
  <a href="https://www.facebook.com/friends" target="_blank" rel="noopener noreferrer">
    <img src={Friends} alt="" />
    <span>Friends</span>
  </a>
</div>

<div className="item">
  <a href="https://www.facebook.com/groups/<group_id>" target="_blank" rel="noopener noreferrer">
    <img src={Groups} alt="" />
    <span>Groups</span>
  </a>
</div>

          <div className="item">
            <Link to="https://www.daraz.pk/" target="_blank" rel="noopener noreferrer">
              <img src={Market} alt="" />
              <span>Marketplace</span>
            </Link>
          </div>
          <div className="item">
  <Link to="https://www.youtube.com/shorts/" target="_blank" rel="noopener noreferrer">
    <img src={Watch} alt="" />
    <span>Watch</span>
  </Link>
</div>

<div className="item">
  <a href="https://www.facebook.com/memories/" target="_blank" rel="noopener noreferrer">
    <img src={Memories} alt="" />
    <span>Memories</span>
  </a>
</div>

        </div>

        <hr />

        {/* Second Menu */}
        <div className="menu">
  <span>Your shortcuts</span>
  <div className="item">
    <Link to="https://allevents.in/karachi" target="_blank" rel="noopener noreferrer">
      <img src={Events} alt="" />
      <span>Events</span>
    </Link>
  </div>

          <div className="item">
  <Link to="https://www.friv.com/" target="_blank" rel="noopener noreferrer">
    <img src={Gaming} alt="" />
    <span>Gaming</span>
  </Link>
</div>
<div className="item">
  <Link to="https://nu.edu.pk/Oric/Photogallery" target="_blank" rel="noopener noreferrer">
    <img src={Gallery} alt="" />
    <span>Gallery</span>
  </Link>
</div>

        <div className="item">
  <Link to="https://www.youtube.com/hashtag/videos" target="_blank" rel="noopener noreferrer">
    <img src={Videos} alt="" />
    <span>Videos</span>
  </Link>
</div>

<div className="item">
  <Link to="https://www.messenger.com/desktop" target="_blank" rel="noopener noreferrer">
    <img src={Messages} alt="" />
    <span>Messages</span>
  </Link>
</div>

        </div>

        <hr />

        {/* Third Menu */}
        <div className="menu">
  <span>Others</span>
  <div className="item">
    <Link to="https://gogetfunding.com/campaigns/?country=pk" target="_blank" rel="noopener noreferrer">
      <img src={Fund} alt="" />
      <span>Fundraiser</span>
    </Link>
  </div>

          <div className="item">
  <Link to="https://www.tutorialswebsite.com/" target="_blank" rel="noopener noreferrer">
    <img src={Tutorials} alt="" />
    <span>Tutorials</span>
  </Link>
</div>

          <div className="item">
  <Link to="https://grow.google/intl/uk/courses-and-tools/" target="_blank" rel="noopener noreferrer">
    <img src={Courses} alt="" />
    <span>Courses</span>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
};

export default LeftBar;
