"use strict";

const fs = require('fs');
if (! fs.existsSync('.env')) {
  fs.createReadStream('.env.example').pipe(fs.createWriteStream('.env'));
}
