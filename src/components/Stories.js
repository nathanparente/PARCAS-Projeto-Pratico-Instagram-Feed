import "../styles/stories.scss";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";

//STORIES => PLUGIN REACT SCROLL HORIZONTAL npm i react-scroll-horizontal
// foi necessário configurar "npm config set legacy-peer-deps true" 
//It tells NPM to ignore peer deps and proceed with the installation anyway

function Stories() {
    return (
        <div className="stories">
        <HorizontalScroll className="scroll" reverseScroll={true}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </HorizontalScroll>

        </div>
    )
}

export default Stories