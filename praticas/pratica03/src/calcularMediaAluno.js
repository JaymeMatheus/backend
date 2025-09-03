function calcularMediaAluno(a1, a2, a3) {
  if (a1 === undefined || a2 === undefined) {
    throw new Error('Notas a1 ou a2 não definidas');
  }

  if (a1 < 0 || a2 < 0) {
    throw new Error('Notas a1 ou a2 não podem ser negativas');
  }

  const base = a1 * 0.4 + a2 * 0.6;

  if (a3 === undefined) {
    return base;
  }

  if (a3 < 0) {
    throw new Error('Nota a3 não pode ser negativa');
  }

  const mediasubstituiA1 = a3 * 0.4 + a2 * 0.6;
  const mediasubstituiA2 = a1 * 0.4 + a3 * 0.6;

  return Math.max(base, mediasubstituiA1, mediasubstituiA2);
}

module.exports = { calcularMediaAluno };
