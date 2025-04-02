const mongoose = require('mongoose');
const User = mongoose.model('Users');
const Experience = mongoose.model('Experiences');

exports.post = async (req, res) => {
  try {
    const { company, title, description, date } = req.body;

    const user = await User.findOne({ _id: req.params.id, deleted: false });
    if (!user) return res.status(404).json();

    const experience = new Experience({ company, title, description, date });
    await experience.save();

    user.experience.push(experience._id);
    await user.save();

    res.status(201).json({ experience });
  } catch (err) {
    res.status(500).json();
  }
};

exports.delete = async (req, res) => {
  try {
    const { id, exp } = req.params;

    const user = await User.findOne({ _id: id, deleted: false });
    if (!user) return res.status(404).json();

    await Experience.findByIdAndDelete(exp);

    user.experience = user.experience.filter(e => e.toString() !== exp);
    await user.save();

    res.status(200).json();
  } catch (err) {
    res.status(500).json();
  }
};
