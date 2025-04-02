const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.get = async (req, res) => {
  try {
    const users = await User.find({ deleted: false });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json();
  }
};

exports.getOne = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id, deleted: false });
    if (!user) return res.status(404).json({ message: 'Profil non trouvé' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json();
  }
};

exports.post = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json();
  }
};

exports.put = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.params.id, deleted: false },
      { name, email },
      { new: true }
    );
    if (!user) return res.status(404).json();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json();
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id, deleted: false },
      { deleted: true },
      { new: true }
    );
    if (!user) return res.status(404);
    res.status(200).json();
  } catch (err) {
    res.status(500).json();
  }
};
