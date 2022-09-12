const Ship = require("../src/Ship")

describe("Ship Factory Function", () => {
   it("should return ship of size 0", () => {
    expect(Ship().size).toBe(0)
   })
   it("should return ship with 0 damage taken", () => {
    expect(Ship().health).toBe(0)
   })
   it("should return 0", () => {
      expect(Ship().hit()).toBe(0)
   })
   it("should return 3", () => {
      expect(Ship(5, 5).hit(2)).toBe(3)
   })
   it("should return true", () => {
      expect(Ship(5, 0).isSunk()).toBe(true)
   })
   it("should return false", () => {
      expect(Ship(5, 4).isSunk()).toBe(false)
   })
})
