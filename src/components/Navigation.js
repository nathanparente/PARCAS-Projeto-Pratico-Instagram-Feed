import '../styles/navigation.scss';
import logo from '../images/instagramLogo.png';
import searchIcon from '../images/searchIcon.png';
import Menu from './Menu.js';


function Navigation (){
    return(
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <spa className="searchText">Search</spa>
                </div>
            </div>
            <Menu/>
        </div>
    )
}

export default Navigation;