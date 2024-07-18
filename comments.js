// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const comments = [
  {
    id: 1,
    comment: 'Hello World',
  },
];

// Middleware