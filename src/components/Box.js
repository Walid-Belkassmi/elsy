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
            {isWater && <input type="range" onChange={this.props.change} step="1" value={this.props.value} min={this.props.min} max={this.props.max}></input>} 
        </div>
        );
}
}

export default Box