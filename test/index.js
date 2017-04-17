var tap = require('tap');
var index = require('../index.js');

// api
tap.ok(index.getFile);
tap.ok(index.getFilePath);

// assertions
tap.match(index.getFile('pure-min.css'), /pure\-button/, 'should load the file');
tap.match(index.getFilePath('pure-min.css'), /pure\-min\.css/, 'should return file path');
tap.throws(index.getFile, new Error('undefined does not exist'));
