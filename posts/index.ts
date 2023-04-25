import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

const posts: any = {};

const PORT = 4000;

app.get('/posts', (req: Request, res: Response) => {
    res.send(posts);
});

app.post('/posts', (req: Request, res: Response) => {
    const id = uuidv4();
    const { title } = req.body;

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
    console.log('App listening on port: ', PORT);
})