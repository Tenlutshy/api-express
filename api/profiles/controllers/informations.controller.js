const mongoose = require('mongoose');
const User = mongoose.model('Users');
const Information = mongoose.model('Informations');

exports.put = async (req, res) => {
  try {
    const { bio, location, web_site } = req.body;

    const user = await User.findOne({ _id: req.params.id, deleted: false });
    if (!user) return res.status(404).json();

    let information;

    if (user.information) {
      information = await Information.findByIdAndUpdate(
        user.information,
        { bio, location, web_site },
        { new: true, runValidators: true }
      );
    } else {
      information = new Information({ bio, location, web_site });
      await information.save();

      user.information = information._id;
      await user.save();
    }

    res.status(200).json({
      information
    });
  } catch (err) {
    res.status(500).json();
  }
};
