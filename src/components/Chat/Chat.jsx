import { Send, X } from "lucide-react"
import { userData } from "../../utils/listData"
import "./Chat.scss"
import { useState } from "react"

const Chat = () => {
    const [chat,setChat]=useState(true)
  return (
    <div className="chat">
          
        <div className="messages">
            <h2>Messages</h2>
          
            <div className="message">
                <img src={userData.image} alt={userData.title} />
                <span> {userData.full_name}</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..... </p>
            </div>
             <div className="message">
                <img src={userData.image} alt={userData.title} />
                <span> {userData.full_name}</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..... </p>
            </div> <div className="message">
                <img src={userData.image} alt={userData.title} />
                <span> {userData.full_name}</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..... </p>
            </div> <div className="message">
                <img src={userData.image} alt={userData.title} />
                <span> {userData.full_name}</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..... </p>
            </div> <div className="message">
                <img src={userData.image} alt={userData.title} />
                <span> {userData.full_name}</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..... </p>
            </div> <div className="message">
                <img src={userData.image} alt={userData.title} />
                <span> {userData.full_name}</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..... </p>
            </div>

        </div>
        {chat && 
        <div className="chatbox"> 
            <div className="top"> 
               <div className="data"><img src={userData.image} alt={userData.title} />
                <p>{userData.full_name}</p> </div> 
                <X onClick={()=>setChat(!chat)}/>
            </div>
            <div className="center"> 
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet consectetur..</p>
                    <span> 1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet consectetur..</p>
                    <span> 1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet consectetur..</p>
                    <span> 1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet consectetur..</p>
                    <span> 1 hour ago</span>
                </div><div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet consectetur..</p>
                    <span> 1 hour ago</span>
                </div><div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet consectetur..</p>
                    <span> 1 hour ago</span>
                </div><div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet consectetur..</p>
                    <span> 1 hour ago</span>
                </div>


            </div>
            <div className="bottom">
                <textarea name="message" id="text"></textarea>
                <button type="submit"> Send <Send/></button>
            </div>
        </div>}
      
    </div>
  )
}

export default Chat
