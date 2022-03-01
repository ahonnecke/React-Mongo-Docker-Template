const mongoose = require("mongoose");

const vehicleTripSchema = new mongoose.Schema({
  vehicleTripname: {
    type: String
  }
});

const VehicleTrip = mongoose.model("VehicleTrip", vehicleTripSchema);

module.exports = VehicleTrip;
