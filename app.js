const express = require('express');
const app = express();

app.use(express.json());


const fingerBones = [
    {
        id: 1,
        name: "Distal Phalanges",
        description: "The tips of the fingers, used for gripping and sensing."
    },
    {
        id: 2,
        name: "Intermediate Phalanges",
        description: "The middle bones in fingers, absent in the thumb."
    },
    {
        id: 3,
        name: "Proximal Phalanges",
        description: "The bones closest to the hand, connecting fingers to the palm."
    },
    {
        id: 4,
        name: "Metacarpals",
        description: "Bones in the palm that support finger movement."
    },
];
let nextId = 5;


const getFingerBoneById = (id) => {
    return fingerBones.find(finger => finger.id === Number(id));
}

app.get('/fingerbones', (req, res) => {
    res.send(fingerBones);
})

app.get('/fingerbones/:id', (req, res) => {
    const fingerBone = getFingerBoneById(req.params.id)
    if (!fingerBone) {
        res.status(404).send({error: "Resource not found"});
    }
    res.send(fingerBone)
})

app.post('/fingerbones', (req, res) => {
    const newBone = req.body;
    newBone.id = nextId++;
    fingerBones.push(newBone);
    res.send(newBone);
})

app.put('/fingerbones/:id', (req, res) => {
    const fingerBone = getFingerBoneById(req.params.id)
    if (!fingerBone) {
        res.status(404).send({error: "Resource not found"});
    }
    const newBone = req.body;
    fingerBone.name = newBone.name;
    fingerBone.description = newBone.description;
    res.send(fingerBone)
})

app.patch('/fingerbones/:id', (req, res) => {
    const fingerBone = getFingerBoneById(req.params.id)
    if (!fingerBone) {
        res.status(404).send({error: "Resource not found"});
    }
    const newBone = req.body;
    if (newBone.name) {
        fingerBone.name = newBone.name;
    }
    if (newBone.description) {
        fingerBone.description = newBone.description;
    }
    res.send(fingerBone)
})

app.delete('/fingerbones/:id', (req, res) => {
    const fingerBone = getFingerBoneById(req.params.id)
    if (!fingerBone) {
        res.status(404).send({error: "Resource not found"});
    }
    const index = fingerBones.findIndex(bone => bone.id === +req.params.id);
    console.log("index:",index)
    fingerBones.splice(index, 1);
    res.send(fingerBone)
})

app.listen(8080)