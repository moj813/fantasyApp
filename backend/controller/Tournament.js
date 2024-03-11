const jwt = require("jsonwebtoken");
require("dotenv").config();

const addTournament = async (req, res) => {
  try {
    console.log(req);
    const {
      tournamentName,
      cityName,
      mobileNumber,
      organiserName,
      startDate,
      lastDate,
    } = req.body;
    console.log(
      tournamentName,
      cityName,
      mobileNumber,
      organiserName,
      startDate,
      lastDate
    );
    return res.json({
      success: true,
    });
  } catch (error) {
    return res.send("Pata nahi par aagaya");
  }
};

module.exports = { addTournament };
