const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ "message": "Hello, I am in GET Method" });
});

app.post("/api", (req, res) => {
    console.log("POST Method:",req.body)
    res.json({ "message": "Hello, I am in POST Method","data": req.body});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
