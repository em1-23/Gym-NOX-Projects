import React from "react";
function InputSend(props){
    return(
        <div className="Send-Contuner">
            <form action="" className="Simple-Form">
                <input type="text" id="Massage" placeholder={props.placeholder} className="Box" />
                <input type="submit" value="→" className="Box Submit" />
            </form>
        </div>
    );
}
export default InputSend;