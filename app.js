import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    var response = await axios.post(req.query.url, req.body);
    res.send(response.data);
});

app.get('/', async (req, res) => {
    var response = await axios.get(req.query.url, {
        headers: req.headers
    });
    res.send(response.data);
});

app.listen(8080);