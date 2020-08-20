/*---------------------------
  calling a function from tutorial.js
  ---------------------------*/
const lesson01 = require('./lessons/01_calling_function');
//lesson01.sum(1,1);
//lesson01.PI();
//lesson01.SomeMathObject();

/*---------------------------
  EVENT EMITTER
  ---------------------------*/
const lesson02 = require('./lessons/02_event_emitter');
//lesson02.emitEvent(1,1);
//lesson02.pedro();
//lesson02.mat();

/*---------------------------
  READLINE
  ---------------------------*/
const lesson03 = require('./lessons/03_readline');
//lesson03.questionPrompt();

/*---------------------------
  Working With File System Module (Creating,Reading,Deleting,Renaming) Files
  ---------------------------*/
const lesson04 = require('./lessons/04_file_system_module');
//lesson04.createFile();
//lesson04.renameFile();
//lesson04.appendData();
//lesson04.deleteFile();

/*---------------------------
  Working With File System Module. Creating and Deleting Folders
  ---------------------------*/
const lesson05 = require('./lessons/05_file_system_module_v2');
//lesson05.addFolder();
//lesson05.deleteFolder();
//lesson05.addFile();
//lesson05.deleteFileDeleteFolder();
//lesson05.deleteMultipleFiles();

/*---------------------------
  Working with Readable and Writable Streams
  ---------------------------*/
const lesson06 = require('./lessons/06_read_write_stream');
//lesson06.writeFile();

/*---------------------------
  Pipes and Pipe Chaining. (Readable,Writable and Transform Streams)
  ---------------------------*/
const lesson07 = require('./lessons/07_pipes_pipe_chaining');
//lesson07.pipeStream();
//lesson07.zipFile();
//lesson07.unzipFile();

/*---------------------------
  Creating a Http Server using the Http Module
  ---------------------------*/
const lesson08 = require('./lessons/08_http_server');
//lesson08.createHttpServer();

/*---------------------------
  Serving Static Files with Http and File System Module (html,json,image)
  ---------------------------*/
const lesson09 = require('./lessons/09_http_static_files');
//lesson09.showHtml();
//lesson09.showJson();
//lesson09.showImage();

/*---------------------------
  Installing Packages using Npm (Node Package Manager)
  ---------------------------*/
const _ = require('lodash');
//let example = _.fill([1,2,3,4,5], "banana", 1, 4);
//console.log(example);

/*---------------------------
  Getting started with Express Web Framework
  ---------------------------*/
const lesson13 = require('./lessons/13_start_express');
//lesson13.startExpress();

/*---------------------------
  Working with Express Http Get Request, Route Params and Query Strings
  ---------------------------*/
const lesson14 = require('./lessons/14_express_http');
//lesson14.startExpress();

/*---------------------------
  Serving Static Files with Express
  ---------------------------*/
const lesson15 = require('./lessons/15_express_static_files');
//lesson15.startExpress();

/*---------------------------
  Http Post Request with Express and Body Parser Module
  ---------------------------*/
const lesson16 = require('./lessons/16_express_post_request');
//lesson16.startExpress();

/*---------------------------
  Working with JSON Data with Express and the Body Parser Module
  ---------------------------*/
const lesson17 = require('./lessons/17_json_body_parser');
//lesson17.startExpress();

/*---------------------------
  User Input Validation With Express And JOI
  ---------------------------*/
const lesson18 = require('./lessons/18_input_validation_joi');
//lesson18.startExpress();

/*---------------------------
  User Input Validation with JOI Validating Nested Object and Arrays
  ---------------------------*/
const lesson19 = require('./lessons/19_joi_object_arrays');
//lesson19.startJoi();

/*---------------------------
  Getting Started With EJS Templates With Express
  ---------------------------*/
const lesson20 = require('./lessons/20_ejs_template');
//lesson20.startEJS();

/*---------------------------
  How does MiddleWare Work and Creating Custom Middleware
  ---------------------------*/
const lesson21 = require('./lessons/21_middleware');
//lesson21.middleware();

/*---------------------------
  Working With The Express Router
  ---------------------------*/
const lesson22 = require('./lessons/22_express_router');
//lesson22.startRouter();