import React from "react";
import "./GameBoard.css";
import Tile from "./Tile";
import findNumIn2DArray from "../logic/findNumIn2DArray";
import shuffleBoard from "../logic/shuffleBoard";
import isWin from "../logic/isWin";
import originImage from "../media/origin.png"

// load all tiles
import tile0img from "../media/0.png"
import tile1img from "../media/1.png"
import tile2img from "../media/2.png"
import tile3img from "../media/3.png"
import tile4img from "../media/4.png"
import tile5img from "../media/5.png"
import tile6img from "../media/6.png"
import tile7img from "../media/7.png"
import tile8img from "../media/8.png"


export default class GameBoard extends React.Component{
    constructor(props) {
        super(props);
        
        this.tileImages = [tile0img, tile1img, tile2img, tile3img, tile4img, tile5img, tile6img, tile7img, tile8img];
        this.holeIndex = 0;
        
        this.maxHeight = 600;
        this.maxWidth = 600;
        
        this.state = {
            current: shuffleBoard(3, 3),
            stepCounter: 0,
        };
        
        this.createTiles = this.createTiles.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = function(tileIndex){
        let board = this.state.current;
        if(board === undefined || board === null) return;
        
        // find the coordinate of hole
        let holeCoordinate = findNumIn2DArray(board, this.holeIndex);
    
        // find the coordinate of tile
        let tileCoordinate = findNumIn2DArray(board, tileIndex);
        
        // distance is one
        if(holeCoordinate != null && tileCoordinate != null && Math.abs(holeCoordinate.row - tileCoordinate.row) + Math.abs(holeCoordinate.col - tileCoordinate.col) === 1){
            // make a copy
            let newBoard = [];
            for(let i = 0; i < board.length; i++){
                newBoard.push(board[i].slice());
            }
    
            newBoard[tileCoordinate.row][tileCoordinate.col] = this.holeIndex;
            newBoard[holeCoordinate.row][holeCoordinate.col] = tileIndex;
            
            this.setState({
                current: newBoard,
                stepCounter: this.state.stepCounter + 1,
            });
            
            if(isWin(newBoard)){
                alert("Congratulation!");
            }
        }
        
    }
    
    createTiles = function(){
        let tileComponents = [];
        let board = this.state.current;
        
        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[row].length; col++){
                if(board[row][col] === this.holeIndex) continue; // skip the whole
                
                tileComponents.push(
                    <Tile key={board[row][col]}
                          imageIndex={board[row][col]}
                          img={this.tileImages[board[row][col]]}
                          maxHeight={this.maxHeight / 3.0}
                          maxWidth={this.maxWidth / 3.0}
                          gridRow={row+1}
                          gridCol={col+1}
                          onClick={this.handleClick}
                    />
                )
            }
        }
        return tileComponents;
    }

    render(){
        
        return (
            <div className="game-board">
                {this.createTiles()}
                <img className="background" src={originImage} alt="bg"/>
                <p className="step-counter">Step: {this.state.stepCounter}</p>
            </div>
        )
    }
}