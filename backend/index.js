const express = require('express');
const connectOauthDB = require('./config/db');
const oauthRoutes = require('./routes/oauthRoutes');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors')
const adminAuthRoutes = require('./routes/adminAuthRoutes')
const confiderationAuthRoutes = require('./routes/confiderationAuthRoutes')
const adminRoutes = require('./routes/adminRoutes')
const confiderationRoutes = require('./routes/confiderationRoutes')

dotenv.config();

const app = express();
app.use(cors())
connectOauthDB();

app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', oauthRoutes);
app.use('/admin', adminAuthRoutes)
app.use('/confideration', confiderationAuthRoutes)
app.use('/management', adminRoutes)
app.use('/confiderationManagement', confiderationRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


