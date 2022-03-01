const express = require('express');
const app = express();
const connectDb = require('./src/connection');
const VehicleTrip = require('./src/VehicleTrip.model');
const cors = require('cors');

const PORT = 8080;
app.use(cors());

app.get('/vehicleTrips', async (req, res) => {
  const vehicleTrips = await VehicleTrip.find();

  res.json(vehicleTrips);
});

app.get('/vehicleTrip-create', async (req, res) => {
  const vehicleTrip = new VehicleTrip({ vehicleTripname: 'vehicleTripTest' });

  await vehicleTrip.save().then(() => console.log('VehicleTrip created'));

  res.send('VehicleTrip created \n');
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log('MongoDb connected');
  });
});
