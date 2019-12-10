import lifeColor from '../app';

test('should health', () => {
    const result = lifeColor({name: 'Маг', health: 70});
    expect(result).toBe('healthy');
});

test('should wounded', () => {
    const result = lifeColor({name: 'Маг', health: 40});
    expect(result).toBe('wounded');
});

test('should critical', () => {
    const result = lifeColor({name: 'Маг', health: 10});
    expect(result).toBe('critical');
});
