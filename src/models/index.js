const users = [{
  id: 1,
  name: 'Tamas',
  cars: [1, 2],
}, {
  id: 2,
  name: 'Eloisa',
  cars: [],
}, {
  id: 3,
  name: 'Gilberto',
  cars: [3],
}];

const cars = [{
  id: 1,
  make: 'Ford',
  model: 'Fusion',
  color: 'Black',
  ownedBy: 1,
}, {
  id: 2,
  make: 'Chevrolet',
  model: 'Cruze',
  color: 'White',
  ownedBy: 2,
}, {
  id: 3,
  make: 'Mercedes',
  model: 'C250',
  color: 'Red',
  ownedBy: 3,
}];

module.exports = {
  users,
  cars,
};
