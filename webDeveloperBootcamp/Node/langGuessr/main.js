
import {createRequire} from "module";
const require = createRequire(import.meta.url);
import {franc} from 'franc';
const langs = require('langs');
let colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log("Opps, Try with more sample!".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green)
}


