Libraries vs Framework

library: You are in charge of the flow of the application code, and you decide when to use the library.

Example: Bootstrap


Framework: The framework is in charge and I just participate! Framework tell you where to pull in the code. 

Example: Express helps:
    1. start up a server
    2. parse incoming request
    3. Match those requests to particular routes
    4. Craft out http response and associated content.

**~~***********************~~**
What you need to use to run express:
const express = require('express');
const app = express();

**~~***********************~~**
app.get('*', (req, res) => {
res.send(`I don't know that path, Loser!!`)
})
This must be put last after all the get and post requests because it cuts everything else off when used cause it MATCHES EVERYTHING!!!. 


EJS stands for Embedded JavaScript,and it uses JavaScript syntax... it is a simple templating language that lets you generate HTML markup with plain JavaScript. Lets you put JavaScript in HTML markup.

EJS Tags that need to be used:

<%  for control-flow, no output
<%_ strips all whitespace before it
<%= Outputs the value 
<%- Outputs the unescaped value into the template
<%# Comment tag
<%% Outputs a literal '<%'
%> Plain ending tag
-%> trims following newline
_%> removes all whitespace after it

















