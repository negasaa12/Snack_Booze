
//  unroll should take in such a square array and return a single array containing the values in the square.
//   You should obtain the values by traversing the square in a spiral: 
//   from the top-left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.
function unroll(squareArray) {


    let array2= [];
        
    for(let i = 0; i < squareArray.length; i ++){
        for(let x = 0; x <squareArray[i].length; x ++){
            array2.push(squareArray[i][x])
        }
    }
        return array2;

}

module.exports = unroll;
