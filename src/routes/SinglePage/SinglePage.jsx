import Slider from "../../components/Slider/Slider";
import { Bath, Bed, BusFront, Hotel, PinIcon, School, Square } from "lucide-react";
import {  singlePostData, userData} from "../../utils/listData";
import { Link, useNavigate } from "react-router-dom";

import "./SinglePage.scss";
import Map from "../../components/Map/Map";
const SinglePage = () => {
  const navigate=useNavigate()
 
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <div className="info">
            <Slider image={singlePostData.images} />
            <div className="top">
              <div className="post">
                {" "}
                <h2>{singlePostData.title}</h2>
                <p>
                  {" "}
                  <PinIcon />
                  {singlePostData.address}
                </p>
                <div className="price">${singlePostData.price}</div>
              </div>

              <div className="user" onClick={()=>navigate("/profile")} >
                <span className="title" >{userData.full_name}</span>
                <img src={userData.image} alt={userData.title} />
              </div>
            </div>

            <div className="bottom">
              <p>{singlePostData.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="itemsVertical">
            <div className="general">
              {" "}
              <School />{" "}
              <div className="">
                <p>School</p>
                <p>200m away</p>
              </div>{" "}
            </div>
            <div className="general">
              <BusFront />{" "}
              <div className="">
                {" "}
                <p>Bus Stop</p> <p>200m away</p>
              </div>{" "}
            </div>
            <div className="general ">
              <Hotel />{" "}
              <div className="schoolText">
                {" "}
                <p>Restaurant</p> <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="itemsHorizontal">
            <div className="size"><Square/> 80sqrft</div>
            <div className="size"> <Bath/>1 Bathrooms</div>
            <div className="size"><Bed/> 2Bed</div>
            
             </div>
          <p className="title">NearBy place</p>
          <div className="itemsHorizontal">
            <div className="school">
              {" "}
              <School />{" "}
              <div className="schoolText">
                <p>School</p>
                <p>200m away</p>
              </div>{" "}
            </div>
            <div className="school">
              <BusFront />{" "}
              <div className="schoolText">
                {" "}
                <p>Bus Stop</p> <p>200m away</p>
              </div>{" "}
            </div>
            <div className="school ">
              <Hotel />{" "}
              <div className="schoolText">
                {" "}
                <p>Restaurant</p> <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map lists={[singlePostData]}/>
          </div>
          <div className="buttonContainer">
            <button> Send a Message</button>
            <button> Save this Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
