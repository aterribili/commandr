import fs from 'fs';

export function generateComponent(componentName) {
  generate(componentName, '/component', componentName);
}

export function generateTestComponent(componentName) {
  generate(componentName, '/test-component', `${componentName}-test`);
}

function generate(componentName, path, fileName) {
  fs.readFile(__dirname + path, 'utf-8', (err, data) => {
    if (err) return console.log('Error when trying to generate component with error ' + err);

    let newFile = data.replace(/{ComponentName}/g, componentName);

    fs.writeFile(`${fileName}.js`, newFile, (err) => {
      if (err) return console.log('Error when trying to generate component with error ' + err);
      console.log(`${fileName}.js created`);
    });
  });
}

