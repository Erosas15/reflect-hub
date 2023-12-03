const express = require("express");
const cors = require("cors");
const path = require("path");
const moduleAlias = require("module-alias");

// Define aliases
moduleAlias.addAliases({
  "@src": path.join(__dirname, "src"),
  "@routes": path.join(__dirname, "routes"),
});

const authRoutes = require("@routes/auth");
const messageRoute = require("@routes/journal")


const app = express();
const port = 3001;


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET, HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}

app.use(express.json());
app.use(cors(corsOptions));

// Attach route handlers
app.use("/auth", authRoutes);
app.use("/route", messageRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});