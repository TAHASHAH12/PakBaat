import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from '../../context/darkModeContext'; // Adjusted import path
import { AuthContext } from '../../context/authContext'; // Adjusted import path
import './navbar.scss'; // Adjusted import path

//import "./components/navbar/navbar.scss";  // Adjusted import path

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none", cursor: "pointer", fontWeight: "bold", fontSize: "20px" }}>
          PakBaat
        </Link>
        <Link to="/">
          <HomeOutlinedIcon />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Link to={`/profile/${currentUser.id}`}>
          <PersonOutlinedIcon style={{ fontWeight: "bold" }} />
        </Link>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <NotificationsOutlinedIcon />
        </a>
        <Link to={`/profile/${currentUser.id}`}>
          <div className="user">
            <img src={"/upload/" + currentUser.profilepic} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
