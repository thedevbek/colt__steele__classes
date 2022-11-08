const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// console.log(fs);

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('apples', { recursive: true }, (err) => {
//     console.log(`In the callback!`)
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/style.css`, '')
    fs.writeFileSync(`${folderName}/main.js`, '')
} catch (e) {
    console.log(`Failed to create ${folderName}`);
    console.log(e);
}

