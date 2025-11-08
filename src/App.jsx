


import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import SinglePage from "./routes/SinglePage/SinglePage"
import Layout from "./routes/Layout/Layout"
import HomePage from "./routes/HomePage/HomePage"
import ListPage from "./routes/ListPage/ListPage"
import ProfilePage from "./routes/Profile/ProfilePage"


const App = () => {
  return (
    <Router>
      <Routes >
       
        <Route path="/" element={<Layout/>} >
        <Route index element={<HomePage/>}/>
        <Route path="list" element={<ListPage/>}/> 
        <Route path="/:id" element={<SinglePage/>}/> 
        <Route path="/profile" element={<ProfilePage/>}/> 
        </Route>
       

      </Routes>
    </Router>
    
  )
}

export default App

