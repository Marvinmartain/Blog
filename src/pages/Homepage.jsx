import "./homepage.css"
import Header from "../components/header/Header"
import Posts from "../components/posts/Posts"
import Sidebar from "../components/sidebar/Sidebar"

export default function Homepage() {
  return (

<> 

<Header />

<div className="homepage">
<Posts />
<Sidebar />
</div>

</>
  )
}
