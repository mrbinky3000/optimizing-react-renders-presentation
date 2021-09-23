"use strict";
const path = require('path');

const basedir = process.cwd();
module.exports = {
  src: path.join(basedir, 'src'),
  dist: path.join(basedir, 'dist'),
  root: basedir,
  nodeModules: path.join(basedir, 'node_modules'),
};
