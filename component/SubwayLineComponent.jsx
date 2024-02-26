// import { useDispatch, useSelector } from "react-redux";
import React from "react";


const SubwayLineComponent = (props) => {
    return (
        <div className="totalBox">
            <div className="subwayLine" style = {{backgroundColor : props.bgColor}}>
                <p>{props.trainLine}</p>
                <span id="subwayLine"></span>
            </div>
            <div className="status">
                <p>Status: On Time</p>
                <span id="status"></span>
            </div>
            <div className="additionalInformation">
                <p>Additional Information: None</p>
                <span id="subwayLine"></span>
            </div>
        </div>
    )
}

export default SubwayLineComponent;
