const express = require("express");
const app = express();
const cors = require('cors') 
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
const AllMyUserRoutes = require("./server/routes/product.routes");
AllMyUserRoutes(app);
const port = 8000;

app.listen(port, () => console.log("The server is all fired up on port " + port));
