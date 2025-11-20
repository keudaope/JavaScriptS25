require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const User = require('./models/User');

const app = express();

// JSON-bodyjen käsittely
app.use(express.json());

// Staattiset tiedostot (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Yhteys MongoDB:hen
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Yhteys MongoDB:hen ok'))
  .catch((err) => console.error('Virhe yhdistäessä MongoDB:hen:', err));

/**
 * POST /api/register
 * Luo uuden käyttäjän
 * body: { username, email, password }
 */
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Käyttäjänimi ja salasana vaaditaan.' });
    }

    // Tarkista onko käyttäjänimi jo olemassa
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Käyttäjänimi on jo käytössä.' });
    }

    // Luo uusi käyttäjä
    const newUser = new User({
      username,
      email,
      password // Oikeassa projektissa: hash password!
    });

    await newUser.save();

    return res.status(201).json({ success: true, message: 'Rekisteröityminen onnistui.' });
  } catch (err) {
    console.error('Virhe /api/register:', err);
    return res.status(500).json({ success: false, message: 'Palvelinvirhe.' });
  }
});

/**
 * POST /api/login
 * Kirjautuminen
 * body: { username, password }
 */
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Anna käyttäjänimi ja salasana.' });
    }

    // Haetaan käyttäjä MongoDB:stä
    const user = await User.findOne({ username });

    if (!user) {
      // käyttäjää ei löydy
      return res.status(401).json({ success: false, message: 'Virheellinen käyttäjänimi tai salasana.' });
    }

    // Tässä esimerkissä ei ole hashia -> verrataan suoraan
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Virheellinen käyttäjänimi tai salasana.' });
    }

    // Onnistui
    return res.json({ success: true, message: 'Kirjautuminen onnistui.' });
  } catch (err) {
    console.error('Virhe /api/login:', err);
    return res.status(500).json({ success: false, message: 'Palvelinvirhe.' });
  }
});

// Käynnistys
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
