const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from AWS Elastic Beanstalk! (Blue / Green Deployment Demo)");
});

app.get('/env', (req, res) => {
    res.json({
        message: "Environment check",
        environment: process.env.ENV_COLOR || "UNKNOWN"
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: "OK",
        environment: process.env.ENV_COLOR || "UNKNOWN"
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

