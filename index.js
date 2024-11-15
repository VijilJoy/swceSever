const express = require("express");
const cors = require("cors");
const app = express();

const { dbConnect } = require("./dbConfigs/dbConnect");
const login = require("./routes/login");
const signup = require("./routes/signup").router;
const users = require("./routes/users");
const projects = require("./routes/projects");
const search = require("./routes/search");
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(login);
app.use(signup);
app.use(users);
app.use(projects);
app.use(search);

dbConnect();
app.listen(4000, () => {
  console.log("Connected to db");
  console.log("Server running...");
});
