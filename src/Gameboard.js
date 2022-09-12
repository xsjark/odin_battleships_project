const Ship = require("./Ship")

const Gameboard = () => {
    let board = new Array(10).fill(new Array(10).fill(0))

    const placeShip = (row = 0, column = 0, size = 5) => {
        const ship = new Array(size).fill("a")
        const newrow = new Array(10).fill(0)
        newrow.splice(column, column + size, ...ship)
        board[row] = newrow
        console.log(board)
    }


    return {
        placeShip,
        get board() { return board}
    }
}

module.exports = Gameboard