var Statix = require('./Statix');
var demoConfiguration = require('./demo-configuration');

var statix = new Statix(demoConfiguration);

statix.server();
