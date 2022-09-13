const Ship = require("./Ship")

const Gameboard = () => {
    let board = new Array(10).fill(new Array(10).fill(0))

    const placeShipHorizontally = (row = 0, column = 0, size = 5) => {
        if(shipFits(column, size)) {
            const ship = new Array(size).fill("a")
            const newrow = new Array(10).fill(0)
            newrow.splice(column, size, ...ship)
            board[row] = newrow
            console.log(board)
        } else {
            console.log("Ship doesn't fit")
        }
    }

    const shipFitsHorizontally = (column, size) => column + size <= 10;

    const placeShipVertically = (row = 0, column = 0, size = 5) => {
        for (let i = row; i < size; i++) {
            const newrow = new Array(10).fill(0)
            newrow.splice(column, 1, "a")
            board[i] = newrow
        }
        console.log(board)
    }


    return {
        placeShipHorizontally,
        shipFitsHorizontally,
        placeShipVertically,
        get board() { return board}
    }
}

module.exports = Gameboard