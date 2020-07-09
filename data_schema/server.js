const express = require('express');
const cors = require('cors')

// importing report

const Report = require('./model')
const Db = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000;

app.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: 'server is on'
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})

// fetching all reports


app.get('/report', async (req, res) => {
    try {
        const reports = await Report.find({})
        res.status(200).json(reports)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})

app.post('/report', async (req, res) => {
    console.log(req.body)
    const report= req.body.report;
    const comment = new Report({ report })
    try {
        const newReport = await report.save()
        res.status(201).json(newReport)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})

app.listen(PORT,()=>{
    console.log(`server is running on port${PORT} `)
})