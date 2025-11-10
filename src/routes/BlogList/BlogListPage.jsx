import "./BlogList.scss"
import {Send} from "lucide-react"
const BlogListPage = () => {
  return (
    <div className="listLayout">
      <div className="thumbnail"> Top image </div>

      <div className="feature">


        <div className="featureLeft">
          <h2> Feature Properties and Guides</h2>

          <div> div1</div>
          <div> div2</div>
          <div> div3</div>
          <div> div4</div>
          <div> div5</div>
          <div> div6</div>
          <div> div7</div>
        </div>
        <div className="featureRight">
          <h2> Hot Topics</h2>

          <div className="hotTopics">
            <h2> Hot Topics</h2>
            <div className="hotDiv">
              <button> Buying</button>
              <button> Selling</button>
              <button> Market</button>
              <button> Travel</button>
              <button> AI</button>
              <button> Bangladesh</button>
            </div>
          </div>
          <div className="Latest"> <div> <h2>Latest listing</h2></div>
            <div> 
              <div> <img src="" alt="" /></div>
             <p> Ai Is changing life</p></div>
             </div>
          <div className="newsLater"> <h2> NewsLetter</h2> <div> <input type="text" /> <Send/></div></div>
          <div className="Links"> Social Links</div>
        </div>

      </div>
    </div>
  )
}

export default BlogListPage