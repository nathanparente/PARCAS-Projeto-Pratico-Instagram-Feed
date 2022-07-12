import '../styles/navigation.scss';
import logo from '../images/instagramLogo.png';
import searchIcon from '../images/searchIcon.png';
import Menu from './Menu.js';


function Navigation (){
    return(
        <div className="navigation">
            <div className="container">
                <a href='https://www.instagram.com/'><img className="logo" src={logo} alt="instagram logo" /></a>
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <input type="text" placeholder='Pesquisar'/>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default Navigation;

/*
<div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <spa className="searchText">Pesquisar</spa>
                </div>
*/