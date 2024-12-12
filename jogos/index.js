const express = require ('express');

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use(userRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
