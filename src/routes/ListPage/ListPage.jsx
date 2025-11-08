import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import "./listPage.scss";
import Map from "../../components/Map/Map";
import { listData } from "../../utils/listData";

const ListPage = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Using static data for now — replace with API later if needed
    setLists(listData);
  }, []);

  return (
    <div className="listPage">
      {/* Left section: Filters + Cards */}
      <div className="listSection">
        <div className="listContainer">
          <Filter />
          <div className="cardListDiv">
            {lists.length > 0 ? (
              lists.map((list) => <Card key={list.id} list={list} />)
            ) : (
              <p className="noData">No data available</p>
            )}
          </div>
        </div>
      </div>

      {/* Right section: Map */}
      <div className="mapSection">
        {lists.length > 0 ? <Map lists={lists} /> : <p>No map data</p>}
      </div>
    </div>
  );
};

export default ListPage;
