let server = require("./server");
let router = require("./router");
let handlers = require("./handlers");

let handle = {};
handle["/"] = handlers.start;
handle["/start"] = handlers.start;
handle["/upload"] = handlers.upload;
handle["/show"] = handlers.show;

server.start(router.route, handle);