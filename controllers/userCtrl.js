const Users = require("../models/userModel");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log({ name, email, password });
      res.json({ msg: "Register test" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
