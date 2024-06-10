const { execSync } = require('child_process');

test('prints Hola Mundo', () => {
  const output = execSync('node src/index.js').toString().trim();
  console.log(`Output: "${output}"`); 
  expect(output).toBe('Hola Mundo');
});
