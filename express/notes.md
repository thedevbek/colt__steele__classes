Libraries vs Framework

library: You are in charge of the flow of the application code, and you decide when to use the library.

Example: Bootstrap


Framework: The framework is in charge and I just participate! Framework tell you where to pull in the code. 

Example: Express helps:
    1. start up a server
    2. parse incoming request
    3. Match those requests to particular routes
    4. Craft out http response and associated content.

*******************
What you need to use to run express:
const express = require('express');
const app = express();
