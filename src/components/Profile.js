import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users"

function Profile (props) {
    
    const {
        username,
        caption,
        urlText,
        iconSize,
        captionSize,
        storyBorder,
        hideAcoountName,
        image,
    } = props;

    let accountName = username 
    ? username 
    : users[Math.floor(Math.random() * users.length)].username

    return <div className="profile">
        <ProfileIcon 
            iconSize={iconSize} 
            storyBorder={storyBorder} 
            image={image}
        />
        {(accountName || caption) && !hideAcoountName && (
            <div className="textContainer">
                <span className="accountName">{accountName}</span>
                <span className={`caption ${captionSize}`}>{caption}</span>
            </div>
        )}
        <a href="/">{urlText}</a>
    </div>
}

export default Profile;