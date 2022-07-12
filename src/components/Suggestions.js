import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions () {
    return <div className="suggestions">
        <div className="titleContainer">
            <div className="title">Suggestions For You</div>
            <a href="/">See All</a>

        </div>
        <Profile 
            caption="Followed by bianca + 3 more" 
            urlText="Follow" 
            iconSize="medium" 
            captionSize="small" 
            storyBorder={true} 
        />
        <Profile
            caption="Followed by casemiro + 1 more"
            urlText="Follow"
            iconSize="medium"
            captionSize="small"
        />
        <Profile
            caption="Followed by willsmith + 1 more"
            urlText="Follow"
            iconSize="medium"
            captionSize="small"
        />
        <Profile
            caption="Followed by leblonjames + 7 more"
            urlText="Follow"
            iconSize="medium"
            captionSize="small"
            storyBorder={true}
        />
        <Profile
            caption="Followed by tiringa + 4 more"
            urlText="Follow"
            iconSize="medium"
            captionSize="small"
        />
    </div>
}

export default Suggestions;