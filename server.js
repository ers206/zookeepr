// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// const PORT = process.env.PORT || 3001;
// const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
// // parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);
// // added css and js by creating path to public folder
// app.use(express.static('public'));
// // when endpoint has api in it we assume it has json DataTransfer. without api it should serve an html page 


// app.listen(PORT, () => {
//     console.log(`API server now on port ${PORT}!`);
//   });


  const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});


// 11.2.5 
//   The express.json() method we used takes incoming POST data in the form of JSON and parses it into the req.body JavaScript object. Both of the above middleware functions need to be set up every time you create a server that's looking to accept POST data.