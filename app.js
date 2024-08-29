import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/version', async (req, res) => {
    res.send({version: 3});
});

app.post('/', async (req, res) => {
    try {
        var h = {};
        if(req.headers.tokenagenda){
            h = {
                tokenAgenda: req.headers.tokenagenda
            };
        }

        var response = await axios.post(req.query.url, req.body, {
            headers: h
        });
        res.send(response.data);
    } catch (error) {
        res.send(error);
    }
});

app.get('/', async (req, res) => {
    try {
        var h = {};
        if(req.headers.tokenagenda){
            h = {
                tokenAgenda: req.headers.tokenagenda
            };
        }

        var response = await axios.get(req.query.url, {
            headers: h
        });
        res.send(response.data);
    } catch (error) {
        res.send(error);
    }
});

app.listen(8080);