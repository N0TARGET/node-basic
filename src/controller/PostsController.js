const express = require('express');
const router = express.Router();
const postService = require('../services/PostService');

router.get('/', async (req, resp) => {
        try {
            let data = await postService.getAll();
            resp.send(data);
        } catch (err) {
            resp.status(500).send({message: err.message});
        }
    }
);

router.get('/:id', async (req, resp) => {
        try {
            let data = await postService.getById(req.params.id);
            resp.send(data);
        } catch (err) {
            resp.status(500).send({message: err.message});
        }
    }
);

router.post('/', async (req, resp) => {
        try {
            let data = await postService.insert(req.body);
            resp.send(data);
        } catch (err) {
            resp.status(500).send({message: err.message})
        }
    }
);

router.put('/', (req, resp) => {
        try {
            let data = postService.update(req.body);
            resp.send(data);
        } catch (err) {
            resp.status(500).send({message: err.message})
        }
    }
);

router.delete('/:id', (req, resp) => {
        try {
            let data = postService.remove(req.params.id);
            resp.send({id: req.params.id});
        } catch (err) {
            resp.status(500).send({message: err.message})
        }
    }
);

module.exports = router;
