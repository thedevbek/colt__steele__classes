Node is a javascript runtime that can be run away from browser.

You build the following with node:
1. web servers
2. command line tools
3. native apps
4. video games
5. drone software
6. so much more


Same syntax but no borrowers stuff.

NEED TO TAKE A NODE CLASS THIS IS A BRUSH WITH IT TO USE EXPRESS!!!!!

You can require files from Node, but you must export them with exports.add = add; is an example

index.js is the main file for the directory shelter it can be exported in another directory if you require it.

You can have an index.js file in a directory and export them to the other files in the directory. Example is with shelter in files.
********************
NPM stands for Node Package Manager. 

Such warnings occur, when you don't have a package.json file.
So, after you navigate to a directory

cd jokster
First, create a package.json file by running
************
npm init -y
***********
and then run
************
npm install give-me-a-joke

*****************
To install all dependencies run npm install and that is it. 

****************
import {createRequire} from "module";

const require = createRequire(import.meta.url);

import {franc} from 'franc';
Use the above files when you have to import a file instead of require it and read docs

***************
Here is how to require a package.json file
const langs = require('langs');
