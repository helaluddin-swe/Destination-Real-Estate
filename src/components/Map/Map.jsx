import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Pin from "../Pin/Pin";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = defaultIcon;

const Map = ({ lists }) => {
  if (!lists || lists.length === 0 || !lists[0].latitude || !lists[0].longitude)
    return <p>No location data available</p>;

  return (
    <MapContainer
      center={[
        parseFloat(lists[0].latitude),
        parseFloat(lists[0].longitude),
      ]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap
        </a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lists.map((list) => (
        <Pin list={list} key={list.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
