const express = require('express');
const app = express();

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
  }
];