export default function findNumIn2DArray(array, target){
    for(let row = 0;row < array.length; row++){
        for(let col = 0;col < array[row].length; col++){
            if(array[row][col] === target) return {row: row, col: col};
        }
    }
    
    return null;
}