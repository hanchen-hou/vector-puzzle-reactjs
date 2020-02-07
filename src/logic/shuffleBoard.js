export default function shuffleBoard(rowNum, colNum){
    let totoalNum = rowNum * colNum;
    
    let board = Array(totoalNum);
    for(let i = 0; i < board.length; i++){
        board[i] = i;
    }
    shuffle(board);
    
    var board2D = [];
    while(board.length)
        board2D.push(board.splice(0,colNum));
    
    return board2D;
}

// https://javascript.info/task/shuffle
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}