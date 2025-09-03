const { calcularMediaAluno } = require('../src/calcularMediaAluno');

// 3c
test('calcularMediaAluno() deve estar definida', () => {
  expect(calcularMediaAluno).toBeDefined();
});

// 5a
test('mostra se a1 ou a2 não forem definidas', () => {
  expect(() => calcularMediaAluno(undefined, 5)).toThrow('Notas a1 ou a2 não definidas');
  expect(() => calcularMediaAluno(5, undefined)).toThrow('Notas a1 ou a2 não definidas');
});

// 5c
test('mostra se a1 ou a2 forem negativas', () => {
  expect(() => calcularMediaAluno(-1, 7)).toThrow('Notas a1 ou a2 não podem ser negativas');
  expect(() => calcularMediaAluno(7, -1)).toThrow('Notas a1 ou a2 não podem ser negativas');
});

// 5e
test('cálculo base quando a3 não é definida: a1*0.4 + a2*0.6', () => {
  expect(calcularMediaAluno(5, 7)).toBeCloseTo(6.2, 5);
});

// 5g
test('mostra se a3 for negativa', () => {
  expect(() => calcularMediaAluno(5, 7, -1)).toThrow('Nota a3 não pode ser negativa');
});

// 5i
test('com a3 definida, escolhe melhor combinação: a1 com a3', () => {
  expect(calcularMediaAluno(9, 3, 8)).toBeCloseTo(8.4, 5);
});

// 5j
test('com a3 definida, escolhe melhor combinação: a3 com a2', () => {
  expect(calcularMediaAluno(5, 7, 10)).toBeCloseTo(8.2, 5);
});
