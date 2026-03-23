const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// In-memory data (temporary DB)
let messages = [];

// GET API
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Azure Backend 🚀" });
});

// GET all messages
app.get("/api/messages", (req, res) => {
    res.json(messages);
});

// POST message
app.post("/api/messages", (req, res) => {
    const { text } = req.body;
    if (text) {
        messages.push(text);
        res.json({ success: true });
    } else {
        res.status(400).json({ error: "Empty message" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});