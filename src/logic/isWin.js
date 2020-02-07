export default function isWin(board){
    for(let row = 0; row < board.length; row++){
        let colSize = board[row].length;
        for(let col = 0; col < colSize; col++){
            if(board[row][col] !== row*colSize + col) return false;
        }
    }
    
    return true;
}