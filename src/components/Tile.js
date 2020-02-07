import React from "react";
import "./Tile.css"

export default class Tile extends React.Component{
    render(){
        const className = "tile";
        const style = {
            gridArea: this.props.gridRow + "/" + this.props.gridCol + "/" + this.props.gridRow + "/" + this.props.gridCol,
            maxHeight: this.props.maxHeight,
            maxWidth: this.props.maxWidth,
            // height: "100%",
            width: "100%",
            display: "block",
        }
        return (
            <img className={className}
                 style={style}
                 src={this.props.img}
                 alt={this.props.imageIndex}
                 onClick={() => this.props.onClick(this.props.imageIndex)}
            />
        )
    }
}