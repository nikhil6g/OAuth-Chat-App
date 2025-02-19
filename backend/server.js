const express = require("express");
const dotenv = require("dotenv");
const messageRoutes = require("./routers/messageRoutes");
const authRoutes = require("./routers/authRoutes");
const cors = require("cors");

const path = require("path");

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*", // Frontend origins
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json()); // to accept json data
app.use("/api/message", messageRoutes);
app.use("/api/auth", authRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "frontend")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server running on PORT ${process.env.PORT}...`);
});

module.exports = app;
