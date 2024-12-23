 import Nav from "./component/nav";
 import { BrowserRouter ,Routes,Route } from "react-router-dom";

 import Home from "./pages/Home";
import Video from "./pages/Video";
import Friends from "./pages/Friends";
import Marketplace from "./pages/Marketplace";
import Gaming from "./pages/Gaming";
import Nopage from "./pages/Nopage";

function App() {
  return (
    <div className="App">

   
 
  <div>
    <BrowserRouter>
    <Nav/>
    <Routes>

<Route path="/" index element={<Home/>}/>
<Route path="friends" element={<Friends/>}/>
<Route path="video" element={<Video/>}/>
<Route path="marketplace" element={<Marketplace/>}/>
<Route path="gaming" element={<Gaming/>}/>
<Route path="*" element={<Nopage/>}/>
    </Routes>
    </BrowserRouter>
  </div>
    </div>
  );
}

export default App;
 // {
    //     "icon":"fundraiser",
    //     "content":"Fundraiser"
    // },
    // {
    //     "icon":"gaming",
    //     "content":"Gaming Video"
    // },
    // {
    //     "icon":"messenger",
    //     "content":"Messenger"
    // },
    // {
    //     "icon":"reels",
    //     "content":"Reels"
    // },
    // {
    //     "icon":"playgames",
    //     "content":"PlayGames"
    // }