import express from "express";
import {client, connect} from './db.js';
const dbName = 'usersdb';
const collectionName = 'users';
connect(); // Connect to MongoDB
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const prj = {user:1,email:1, _id:0};
        const users = await collection.find({}).project(prj).toArray();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }    
});

router.post('/', async (req, res) => {
    res.send("POST called");  
});

export default router;