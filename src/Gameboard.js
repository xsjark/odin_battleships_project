const Ship = require("./Ship")

const Gameboard = () => {
    let board = new Array(10).fill(new Array(10).fill(0))

    const placeShipHorizontally = (row = 0, column = 0, size = 5) => {
        if(shipFitsHorizontally(column, size)) {
            const ship = new Array(size).fill("a")
            const newrow = new Array(10).fill(0)
            newrow.splice(column, size, ...ship)
            board[row] = newrow
            console.log(board)
        } else {
            console.log("Ship doesn't fit horizontally")
        }
    }

    const shipFitsHorizontally = (column, size) => column + size <= 10;

    const placeShipVertically = (row, column, size = 5) => {
        if(shipFitsVertically(row, size)){
            for (let i = row; i <= size+row; i++) {
                if(board[i][column] !== "a"){
                const newrow = new Array(10).fill(0)
                newrow[column] = "a"
                board[i] = newrow
                } else {
                    console.log("Obstructed")
                    break
                }
            }
        console.log(board)
        } else {
            console.log("Ship doesn't fit vertically")
        }
    }

    const shipFitsVertically = (row, size) =>  row + size <= 10;

    const isObstructed = (row, column) => board[row][column] !== 0 



    return {
        placeShipHorizontally,
        shipFitsHorizontally,
        placeShipVertically,
        shipFitsVertically,
        isObstructed,
        get board() { return board}
    }
}

module.exports = Gameboard