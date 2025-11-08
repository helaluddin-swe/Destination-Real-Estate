import "./card.scss";
import { Link } from "react-router-dom";
import { Bath, Bed, BookMarked, MapPin, MessageCircleMore } from "lucide-react";

const Card = ({ list }) => {
  return (
    <div className="cardDiv">
      <div className="imgContainer">
        <Link to={`/${list.id}`} className="imgDiv">
          <img src={list.img} alt={list.title} />
        </Link>
      </div>

      <div className="textContainer">
        <h3>{list.title}</h3>

        <div className="address">
         <MapPin /> <p>{list.address}</p>
        </div>

        <div className="price">
          <p>${list.price}</p>
        </div>

        <div className="bottom">
          <div className="number"><Bath /> {list.bathRooms} bathRooms
          <Bed />  {list.bedRooms} Bedrooms</div>
          <div className="bookmark"> <BookMarked />
          <MessageCircleMore /></div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
