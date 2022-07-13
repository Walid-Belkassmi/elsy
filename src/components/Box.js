import React from "react";

class Box extends React.Component{
    render() {
        const isWater = this.props.icon !== "local_drink"
        return(
        <div className="box col-sm-3 col-6">
            <span className= "material-icons" style={{color: this.props.color, fontSize: '100px'}}>
                {this.props.icon}
            </span>
            <p> {this.props.value} {this.props.unit}</p>
            { isWater && <input type="range" id="" name="" min="0" max="11"></input>} 
        </div>
    );
}
}

export default Box