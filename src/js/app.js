export default function sortHeroes(data) {
  return data.sort((a, b) => (b.health > a.health) - (a.health > b.health));
}

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log(sortHeroes(heroes));
