const courses = [
  {
    title: 'What is NodeJS?',
    order: 1,
    content: [
      'JavaScript Runtime (NOT a langage or a framework)',
      'Built on the V8 JavaScript engine (Same a Google Chrome)',
      'Written in C++',
      'Esentially allows us to run JavaScript code on the server',
    ],
  },
  {
    title: 'What you should know fisrt',
    order: 2,
    content: [
      'JavaScript Fundamentals (Object, Arrays, Conditionals, etc',
      'It may help to learn these first',
      'HTTP (status codes, headers, etc',
      'JSON',
      'Arrow Functions',
      'Promises',
      'MVC Pattern',
    ],
  },
  {
    title: 'Why use NODE?',
    order: 3,
    content: [
        'Fast, efficient and highly sclabale',
        'Event driven, non-blocking I/O model',
        'Popular in the industry',
        'Same langage on the front and backend (JS)'
    ],
  },
  {
    title: 'NON-Blocking I/O',
    order: 4,
    content: [
        'Works on a single thread using non-blocking I/O calls',
        'Supports tens of thousands concurrent connections',
        'Optionizes throughput % scalability in apps with many I/O operations',
        'All of this makes Node.JS apps very fast & eficient',      
    ],
  },
  {
    title: 'Node\'s Event Loop',
    order: 5,
    content: [
        'Single threaded',
        'Supports concurrency via envents & callbacks',
        'EventEmitter class is used to bind events and listeners <br /> <img width="200px" height="50px" src="/imgs/node_1.png" />',
    ],
  },
  {
    title: 'Best types of projects for nodeJS',
    order: 6,
    content: [
        'REST API & Microservices',
        'Real Time Services (Chat, Live Updates',
        'CRUD Apps - Blogs, Shopping Carts, Social Networks',
        'Tools & Utilities',
    ],
    shortAnswer: 'Any thing is not CPU intersive'
  },
  {
    title: 'NPM - Node Package Manager',
    order: 7,
    content: [
        'Install 3rd party packages (frameworks, libraries, tools, etc)',
        'Packages get stored in the "node_modules" file',
        'All dependencies are listed in a "package.json" file',
        'NPM scripts can be created to run certain tasks such as run a server'
    ],
    code: [
        'npm init - Generates a package.json file',
        'npm install express - Install a package locally',
        'npm install -g nodemon - Install a package globally',
    ]
  },
  {
    title: 'Node Modules',
    order: 8,
    content: [
        'Node Core Modules (path, fs, http, etc)',
        '3rd party modules/packages installed vie NPM (yarn)',
        'Custom modules (files)'
    ],
    code: [
        'const path = require("path")',
        'const myFile = require("./myFile")'
    ]
  }
];

module.exports = courses;
