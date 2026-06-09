import React from "react";

function SectionButtonTransition(props){
    return(
        <div className="Section-Button-Transition">
            <h1>{props.h1Number}</h1>
            <h3>{props.h3Type}</h3>
            <button className="Box Ciricle">
                →
            </button>
        </div>
    );
}
export default SectionButtonTransition;