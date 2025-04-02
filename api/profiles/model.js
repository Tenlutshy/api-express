const mongoose = require('mongoose');

const users = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  deleted: { type: Boolean, default: false },
  skills: [{ type: String }],
  experience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'experiences' }],
  information: { type: mongoose.Schema.Types.ObjectId, ref: 'informations' },
}, { collection: 'users' });

const experiences = new mongoose.Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true }
}, { collection: 'experiences' });

const informations = new mongoose.Schema({
  bio: { type: String, required: true },
  location: { type: String, required: true },
  web_site: { type: String, required: true },
}, { collection: 'informations' });

// Enregistrement des modèles
mongoose.model('Users', users);
mongoose.model('Experiences', experiences);
mongoose.model('Informations', informations);

// Exportation des schémas (optionnel)
module.exports = { users, experiences, informations };
