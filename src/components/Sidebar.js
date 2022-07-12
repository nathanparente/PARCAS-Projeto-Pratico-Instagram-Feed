import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profileImageNathan.png"



//INSTALANDO MÓDULO STICKY PARA FIXAR O SIDEBAR NO TOPO DA PÁGINA npm i react-sticky-el

function Sidebar() {
    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile 
                    username="nvdesign.ofc" 
                    caption="Nathan Vieira" 
                    urlText="Switch" 
                    iconSize="big" 
                    image={image}    
                />
                <Suggestions/>
                <Footer/>
            </div>
        </Sticky>
    )
}

export default Sidebar