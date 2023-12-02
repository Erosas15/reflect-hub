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

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// Attach route handlers
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
