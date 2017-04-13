#!/usr/bin/env node
"use strict";

import program from 'commander';
import pkg from '../package.json';
import * as generator from './rn/component-generator';

program.version(pkg.version)
  .option('-g, --generate-component', 'generate react native component')
  .action((componentName) => {
    generator.generateComponent(componentName);
  })
  .parse(process.argv);

