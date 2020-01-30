const app = require('./app');

// Start backend service on port 3333
app.listen(3333, () => {
  console.log('GoBarber server running on port 3333');
});
