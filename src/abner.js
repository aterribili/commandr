#!/usr/bin/env node
"use strict";

import program from 'commander';
import pkg from '../package.json';
import * as generator from './rn/component-generator';

program.version(pkg.version)
  .option('-g, --generate [component-name]', 'generate react native component')
  .option('-t, --test [component-name]', 'generate react native component test')
  .parse(process.argv);

if (program.generate) generator.generateComponent(program.generate);
if (program.test) generator.generateTestComponent(program.test);

