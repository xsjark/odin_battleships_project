 const Ship = (size = 0, health = 0) => {
  const hit = (damage = 0) => {
    return health - damage
  };
  const  isSunk = () => health === 0;
  return {
    size, health, hit, isSunk,
  };
}
module.exports = Ship