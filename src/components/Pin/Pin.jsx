import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./pin.scss";

const Pin = ({ list }) => {
  if (!list.latitude || !list.longitude) return null;

  return (
    <Marker position={[parseFloat(list.latitude), parseFloat(list.longitude)]}>
      <Popup>
        <div className="pin">
          <div className="popUp">
            <div className="imgDiv">
              <img
                src={list.images?.[0]}
                alt={list.title}
              />
            </div>
            <div className="textDiv">
              <h3>{list.title}</h3>
              <p>${list.price}</p>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
