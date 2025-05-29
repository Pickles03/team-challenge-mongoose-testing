const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/create', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({message: 'Error creating post'});
    }
});

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.get('/id/:_id', async (req, res) => {
    const post = await Post.findById(req.params._id);
    if (!post) {
        return res.status(404).json({message: 'Post not found'});
    }
    res.json(post);
});

router.get('/title/:title', async (req, res) => {
    const post = await Post.findOne({title: req.params.title});
    if (!post) {
        return res.status(404).json({message: 'Post not found'});
    }
    res.json(post);
});

router.put('/id/:_id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params._id, req.body, {new: true});
    res.json(post);
});

router.delete('id/:_id', async (req, res) => {
    await Post.findByIdAndDelete(req.params._id);
    res.status(204).send();
});

router.get('/postsWithPagination', async (req, res) => {
    const {page = 1} = req.query;
    const limit = 10;
    const skip = (page - 1) * limit;
    const posts = await Post.find().skip(skip).limit(limit);
    res.json(posts);
});

module.exports = router;