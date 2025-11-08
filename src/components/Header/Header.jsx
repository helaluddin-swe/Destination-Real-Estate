import { useState } from "react";
import Menu from "../../assets/menu.png";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../utils/listData";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = true;
  return (
    <div className="header">
      <div className="left">
        <span className="logo">Logo</span>
      </div>

      <div className="middle">
        <li>Blog</li>
        <li onClick={()=>navigate("/")}>Home</li>
        <li onClick={() => navigate("/list")}>List</li>
      </div>

      <div className="right">
        {user ? (
          <div className="userProfile">
            <span>{userData.full_name}</span>
            <Link to={"/profile"}>
              <img src={userData.image} alt={userData.full_name} />{" "}
            </Link>
            <Link to="/profile">
              <div className="profile">
                <div className="notification">3 </div>
                <span> Profile</span>
              </div>
            </Link>
          </div>
        ) : (
          <button>Login</button>
        )}

        <div className="menuicon">
          <img src={Menu} alt="menu" onClick={() => setOpen((prev) => !prev)} />
        </div>

        <div className={`${open ? "menu active" : "menu"}`}>
          <li>Blog</li>
          <li>Home</li>
          <li onClick={() => navigate("/list")}>List</li>
          <button>Sign</button>
          <Link to="/profile">
            <div className="profile">
              <div className="notification">3 </div>
              <span> Profile</span>
            </div>
          </Link>
          <button>Dark</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
