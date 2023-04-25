import express from 'express';

const app = express();
app.use(express.json());

const comments: any = {};

const PORT = 4001;

app.listen(PORT, () => {
    console.log('Comments server listening on PORT: ', PORT);
});