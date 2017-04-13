import fs from 'fs';

export function generateComponent(componentName) {
  fs.readFile(__dirname + '/component', 'utf-8', (err, data) => {
    if (err) return console.log('Error when trying to generate component with error ' + err);

    let newFile = data.replace(/{ComponentName}/g, componentName);

    fs.writeFile(`${componentName}.js`, newFile, (err) => {
      if (err) return console.log('Error when trying to generate component with error ' + err);
      console.log(`${componentName}.js created`);
    });
  });
}

