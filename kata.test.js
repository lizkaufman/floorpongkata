const { turnTime } = require('./kata.js');

test('2 turns and 330sec total time', () => {
  expect(turnTime(2, 330)).toBe(8);
});

test('5 turns, 800sec totalTime', () => {
  expect(turnTime(5, 800)).toBe(7);
});

test('1 turn, 250sec totalTime', () => {
  expect(turnTime(1, 250)).toBe(11);
});

test('10 turns, 100sec totalTime', () => {
  expect(turnTime(10, 100)).toBe(1);
});

test('25 turn, 2000sec totalTime', () => {
  expect(turnTime(25, 2000)).toBe(4);
});
