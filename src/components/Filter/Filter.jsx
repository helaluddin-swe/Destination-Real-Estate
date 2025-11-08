import "./filter.scss"
import {Search} from "lucide-react"

const Filter = () => {
  return (
    <div className="filter">
    <h2> Search for Location <b>London</b></h2>
    <div className="top"> 
        <div className="search"><label htmlFor=""> location <input type="text" name="location"  placeholder="Enter Location"/></label></div>
    </div>
    <div className="bottom">
        <div className="type"> 
            <label htmlFor=""> Type</label>
          
            <select name="type"  id="type" >
                <option value="">Any</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
            </select>
        </div>
        <div className="type"> 
            <label htmlFor=""> Property</label>
            <select name="property" id="property">
                <option value=""> Any</option>
                <option value="apartment"> Apartment</option>
                <option value="house">House</option>
                <option value="land"> Land</option>
                <option value="hotels"> Hotels</option>
            </select>
        </div>
        <div className="type"> 
            <label htmlFor=""> min Price</label>
            <input type="number" name="maxPrice" placeholder="Any" />
        </div>
        <div className="type"> 
            <label htmlFor=""> Min Price</label>
            <input type="number" name="maxPrice" placeholder="Any" />
        </div>
        <div className="type"> 
            <label htmlFor=""> Bedrooms</label>
            <input type="number" name="maxPrice" placeholder="Any" />
        </div>
        <div className="type"> 
           
          <button><Search size={32} className="search"/> </button>
            
        </div>
    </div>
    </div>
  ) 
}

export default Filter
