const { execSync } = require('child_process');

test('prints Hola Mundo', () => {
  const output = execSync('node src/index.js').toString();
  expect(output).toBe('Hola Mundo\n');
});
