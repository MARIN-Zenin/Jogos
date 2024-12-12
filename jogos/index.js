const express = require ('express');

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use(userRoutes);

app.listen(8000, () => {
  console.log("http://localhost:8000")
})
