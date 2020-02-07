import React from 'react';
import './App.css';
import GameBoard from "./GameBoard";

export default class App extends React.Component {

    render() {
        const className = "app";
        return (
            <div className={className}>
                <GameBoard/>
            </div>
        )
    }
}


