require('babel/polyfill');
const gen = require('./src/generators');
const chans = require('./src/channels');

gen.run();
chans.run();
