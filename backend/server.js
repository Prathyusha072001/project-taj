const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "prathyusha2001",
    database: "taj",
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Signup Route
app.post("/Signup", (req, res) => {
    const { FullName, Email, Password, ConfirmPassword } = req.body;

    // First check if passwords match
    if (Password !== ConfirmPassword) {
        return res.status(400).send({ message: "Passwords do not match" });
    }

    const checkEmailQuery = "SELECT * FROM place WHERE Email = ?";
    db.query(checkEmailQuery, [Email], (err, results) => {
        if (err) {
            console.error("MySQL Error:", err);
            return res.status(500).send({ message: "Server error" });
        }

        if (results.length > 0) {
            return res.status(400).send({ message: "Email already exists!!" });
        }

        const insertQuery = "INSERT INTO place (FullName, Email, Password,ConfirmPassword) VALUES (?, ?, ?,?)";
        db.query(insertQuery, [FullName, Email, Password,ConfirmPassword], (err, result) => {
            if (err) {
                console.error("MySQL Error:", err);
                return res.status(500).send({ message: "Error registering user!!" });
            }

            return res.status(200).send({ message: "Signup successful🎉" });
        });
    });
});

// Login Route
app.post("/Login", (req, res) => {
    const { Email, Password } = req.body;

    const sql = "SELECT * FROM place WHERE Email = ? AND Password = ?";
    db.query(sql, [Email, Password], (err, results) => {
        if (err) {
            console.error("MySQL Error:", err);
            return res.status(500).send({ message: "Server error" });
        }

        if (results.length > 0) {
            return res.status(200).send({ 
                message: "Login successful✅",
                user: results[0] // Return user data
            });
        } else {
            return res.status(401).send({ message: "Invalid credentials ❌" });
        }
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000...");
});