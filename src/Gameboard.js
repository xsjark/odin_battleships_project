const Ship = require("./Ship")

const Gameboard = () => {
    let board = new Array(10).fill(new Array(10).fill(0))

    const placeShip = (row = 0, column = 0, size = 5) => {
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

    const shipFits = (column, size) => column + size <= 10 


    return {
        placeShip,
        shipFits,
        get board() { return board}
    }
}

module.exports = Gameboard