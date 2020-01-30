import app from './app';

// Start backend service on port 3333
app.listen(3333, () => {
  console.log('GoBarber server running on port 3333');
});

// *****
// Sucrase was used to enable import from/export
// To run the server correctly nodemon.json uses an execMap to run sucrase
// register BEFORE running nodemon
// *****
