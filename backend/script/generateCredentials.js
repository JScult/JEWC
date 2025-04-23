const fs = require('fs');
const path = require('path');


const namesData = require('./names.json'); 

const credentials = namesData.map(name => {
  return {
    name,
    email: `${name}@jewc2025.com`,
    password: `2@25${name}J!E?W*S`
  };
});


fs.writeFileSync(
  path.join(__dirname, 'generatedCredentials.json'),
  JSON.stringify(credentials, null, 2),
  'utf-8'
);

console.log('✅ Credentials generated and saved to generatedCredentials.json');
