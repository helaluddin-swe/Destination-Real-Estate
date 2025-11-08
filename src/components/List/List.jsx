import "./list.scss"
import { listData } from '../../utils/listData'
import Card from '../Card/Card'

const List = () => {
  return (
    <div className="list">
      {listData.slice(0,4).map((list)=>(
        <Card key={list.id} list={list}/>
      ))}
    </div>
  )
}

export default List
