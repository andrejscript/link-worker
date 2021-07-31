const express = require('express'),
      config = require('config'),
      mongoose = require('mongoose'),
      PORT = config.get('port') || 5000,
      app = express()

app.use('/api/auth', require('./routes/auth.routes'))


async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log(`Server error: ${e.message}`);
    process.exit(1)
  }
}

start()
