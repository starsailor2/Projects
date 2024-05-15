// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Get all tasks
app.get('/api/tasks', (req, res) => {
    db.all("SELECT * FROM tasks", [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ tasks: rows });
    });
});

// Add a new task
app.post('/api/tasks', (req, res) => {
    const { task } = req.body;
    db.run("INSERT INTO tasks (task, done) VALUES (?, ?)", [task, 0], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID });
    });
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { done } = req.body;
    db.run("UPDATE tasks SET done = ? WHERE id = ?", [done, id], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ updated: this.changes });
    });
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM tasks WHERE id = ?", id, function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ deleted: this.changes });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
