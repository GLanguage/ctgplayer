#!/usr/bin/env node
var ops = require('./src/ops');
var argReader = require('./src/argReader');
var dfs = require('./src/dfs');

var args = process.argv.slice(2);

var reader = new argReader(args);

var start = reader.start, end = reader.end, max = reader.max;
var oplist = reader.oplist;

if (reader.error) {
    console.error('Invalid argument!');
}
else if (!start && start != 0) {
    console.error('No or invalid start number!');
}
else if (!end && end != 0) {
    console.error('No or invalid end number!');
}
else if (!max) {
    console.error('No or invalid max steps number!')
}
else if (oplist.length == 0) {
    console.error('No or invalid operations!');
}
else {
    console.log(dfs(oplist, max, start, end));
}
