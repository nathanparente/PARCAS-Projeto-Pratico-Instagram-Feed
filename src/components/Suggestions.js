import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions () {
    return <div className="suggestions">
        <div className="titleContainer">
            <div className="title">Sugestões para você</div>
            <a href="/">Ver Tudo</a>

        </div>
        <Profile 
            caption="Novo no Instagram" 
            urlText="Seguir" 
            iconSize="medium" 
            captionSize="small" 
            storyBorder={true} 
        />
        <Profile
            caption="Novo no Instagram"
            urlText="Seguir"
            iconSize="medium"
            captionSize="small"
        />
        <Profile
            caption="Novo no Instagram"
            urlText="Seguir"
            iconSize="medium"
            captionSize="small"
        />
        <Profile
            caption="Novo no Instagram"
            urlText="Seguir"
            iconSize="medium"
            captionSize="small"
            storyBorder={true}
        />
        <Profile
            caption="Novo no Instagram"
            urlText="Seguir"
            iconSize="medium"
            captionSize="small"
        />
    </div>
}

export default Suggestions;