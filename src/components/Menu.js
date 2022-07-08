import '../styles/menu.scss';
import {ReactComponent as Home} from '../images/home.svg';
import {ReactComponent as Inbox} from '../images/inbox.svg';
import {ReactComponent as Explorer} from '../images/explorer.svg';
import {ReactComponent as NewPub} from '../images/newPub.svg';
import {ReactComponent as Notifications} from '../images/notifications.svg';



function Menu () {
    return(
        <div className="menu">
            <Home className="icon"/>
            <Inbox className="icon"/>
            <Explorer className="icon"/>
            <NewPub className="icon"/>
            <Notifications className="icon"/>
            {/*<profileComponent/>*/}
        </div>
    )
}

export default Menu;