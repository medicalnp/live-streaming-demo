const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'https://live-streaming-demo-medicalnp-nikhils-projects-e12e3654.vercel.app/' }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the root URL
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the /agents URL
app.get('/agents', function(req, res) {
    res.sendFile(path.join(__dirname, 'index-agents.html'));
});

//this is newer
module.exports = app;

//const server = http.createServer(app);

//server.listen(port, () => {
//    console.log(`Server started on port localhost:${port}`);
//    console.log(`http://localhost:${port}`);
//    console.log(`http://localhost:${port}/agents`);
//});
