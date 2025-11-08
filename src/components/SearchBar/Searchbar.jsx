import {Search} from "lucide-react"
import "./searchBar.scss"
import { useState } from "react"
const types=["buy","rent"]
const Searchbar = () => {
  const[query,setQuery]=useState({type:"buy",location:" ",min:0,
    max:0
  })
  const switchType=(val)=>{
    setQuery((prev)=>({...prev,type:val}))
  }
  return (
    <div className="searchBar">
      <div className="type">
        { types.map((type)=>(
          <button key={type} onClick={()=>switchType(type)} className={`${query.type===type?"active":""}`}> {type}</button>
        ))}
      <form action="">
        <input type="text"  name='location'placeholder='Enter Location'/>
        <input type="number" min={0} max={100000} name='minPrice'placeholder='min Price'/>
        <input type="number" min={0} max={1000000} name='maxPrice'placeholder='max price'/>
        <button type='submit'> <Search className="btn" size={32}/></button>
      </form>
    </div>
    </div>
  )
}

export default Searchbar
