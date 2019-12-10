export default function lifeColor(data) {
    let color = '';
    if (data.health > 50) {
        color = 'healthy';
    } else if (data.health > 15 && data.health <=50) {
        color = 'wounded';
    } else if (data.health <= 15) {
        color = 'critical';
    }
    return color;
}

console.log(lifeColor({name: 'Маг', health: 10}));
