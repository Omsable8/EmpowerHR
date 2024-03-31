const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;


// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Serve static files from the current directory
app.use(express.static(__dirname));

// Database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "company"
});

// Route to handle form submission
app.post('/submit-survey', (req, res) => {
    const { empID, q1, q2, q3, q4, q5, q6, q7 } = req.body;
    let query = "INSERT INTO survey VALUES(?,?,?,?,?,?,?,?)";
    con.query(query, ["name", q1, q2, q3, q4, q5, q6, q7], function(err) {
        if (err) {
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).send('Error inserting data');
        } 
        else {
            console.log("DONE");
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: "Data inserted successfully" });

        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM emp_login WHERE email = ? AND password = ?";
    con.query(query, [email, password], (err, result) => {
        if (err) {
            // throw err;
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        if (result.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, message: 'Logged in successfully' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

app.post('/esignup', (req, res) => {
    const {name, email, password } = req.body;
    const query = "insert into emp_login values(?,?,?)";
    con.query(query, [name,email, password], (err,result) => {
        if (err) {
            // throw err;
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        if (result.affectedRows > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, message: 'Logged in successfully' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

app.post('/hrlogin', (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM hr_login WHERE email = ? AND password = ?";
    con.query(query, [email, password], (err, result) => {
        if (err) {
            // throw err;
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        if (result.length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, message: 'Logged in successfully' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});

app.post('/hrsignup', (req, res) => {
    const {name, email, password } = req.body;
    const query = "insert into hr_login values(?,?,?)";
    con.query(query, [name,email, password], (err,result) => {
        if (err) {
            // throw err;
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        if (result.affectedRows > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, message: 'Logged in successfully' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: false, message: 'Invalid credentials' });
        }
    });
});


//survey responses 

app.get('/get-survey-responses', (req, res) => {
    const query = 'SELECT * FROM survey'; // Adjust the query based on your database schema
    con.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(500).json({ success: false, message: 'Internal server error' });
            return;
        }
        res.json(result);
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
