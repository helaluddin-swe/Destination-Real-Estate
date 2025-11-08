import Card from "../../components/Card/Card";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import { userData } from "../../utils/listData";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="layoutProfile">
      <div className="userDetailsContainer">
        <div className="textHorizontal">
          {" "}
          <h3>User Information </h3> <button> Update Profile</button>
        </div>
        <div className="textVertical">
          {" "}
          <div className="profile">
            <img src={userData.image} alt={userData.title} />
          </div>{" "}
          <div className="name"> Profile Name : {userData.full_name}</div>{" "}
          <div className="userName">UserName: {userData.username}</div>{" "}
          <div className="email">Email: {userData.email}</div>
        </div>
        <div className="textHorizontal">
          {" "}
          <h3>My List </h3> <button> Add New List</button>
        </div>
        <div className="myList">
           <List/>
        </div>
        <div className="textHorizontal">
          {" "}
          <h3>Saved list </h3> <button> Add New List</button>
        </div>
          <div className="savedList">
           <List/>
        </div>
      </div>
      <div className="chatContainer"><div className="wrapper">
        <Chat/>
        
        </div></div>
    </div>
  );
};

export default ProfilePage;
