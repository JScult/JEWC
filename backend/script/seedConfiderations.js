const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const Confideration = require('../models/Confideration');

dotenv.config();


mongoose.connect("mongodb://localhost:27017/JEWC", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
  seedData();
}).catch(err => {
  console.error(' DB Connection Error:', err);
});

async function seedData() {
  try {
    
    const raw = fs.readFileSync(path.join(__dirname, 'generatedCredentials.json'));
    const data = JSON.parse(raw);

    for (const item of data) {
      const existing = await Confideration.findOne({ email: item.email });
      if (existing) {
        console.log(` Skipping existing: ${item.email}`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(item.password, 10);

      const newConf = new Confideration({
        name: item.name,
        email: item.email,
        password: hashedPassword,
      });

      await newConf.save();
      console.log(` Created: ${item.email}`);
    }

    console.log('Seeding completed');
    process.exit(0);
  } catch (err) {
    console.error(' Error during seeding:', err);
    process.exit(1);
  }
}
