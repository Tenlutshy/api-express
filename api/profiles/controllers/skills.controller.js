const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.post = async (req, res) => {
  try {
    const { skill } = req.body;
    if (!skill || typeof skill !== 'string') {
      return res.status(400).json();
    }

    const user = await User.findOneAndUpdate(
      { _id: req.params.id, deleted: false },
      { $addToSet: { skills: skill } },
      { new: true }
    );

    if (!user) return res.status(404).json();

    res.status(200).json({ skills: user.skills });
  } catch (err) {
    res.status(500).json();
  }
};

exports.delete = async (req, res) => {
  try {
    const skillToRemove = req.params.skill;

    const user = await User.findOneAndUpdate(
      { _id: req.params.id, deleted: false },
      { $pull: { skills: skillToRemove } },
      { new: true }
    );

    if (!user) return res.status(404).json();

    res.status(200).json({ skills: user.skills });
  } catch (err) {
    res.status(500).json();
  }
};