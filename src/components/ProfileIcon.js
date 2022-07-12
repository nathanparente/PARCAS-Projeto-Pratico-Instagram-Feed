import "../styles/profileIcon.scss";

function ProfileIcon(props){
    const { iconSize, storyBorder, image } = props;

    //FUNÇÃO QUE GERA UM NUMERO ALEATORIO PARA O PREV AVATAR
    function getRadomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }

    let randomId = getRadomInt(1, 70);
    let profileImage = image 
        ? image 
        : `https://i.pravatar.cc/150?img=${randomId}`
    return(
        <div className={storyBorder ?  "storyBorder" : ""}>
            <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile" />
        </div>
    )
}

export default ProfileIcon;