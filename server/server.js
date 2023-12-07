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
const journalRoute = require("@routes/journal");
const messagesRoute = require("@routes/messages");
const chatRoute = require("@routes/chat");

const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
};

// Use a separate function to initialize the chat bot
async function startServer() {
  try {
    app.use(express.json());
    app.use(cors(corsOptions));

    // Attach route handlers
    app.use("/auth", authRoutes);
    app.use("/journal", journalRoute);
    app.use("/messages", messagesRoute);
    app.use("/chat", chatRoute);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error initializing chat bot:", error);
  }
}

startServer();
