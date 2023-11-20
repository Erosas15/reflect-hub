const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// Attach route handlers
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
