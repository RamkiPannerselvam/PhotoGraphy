const Hapi = require("hapi");
const fs = require("fs");
const path = require('path');


const server = new Hapi.Server();
const directoryPath = path.join(__dirname, 'uploads/');
server.connection({ "host": "localhost", "port": 3000 });

server.start(error => {
    if(error) {
        throw error;
    }
    console.log("Listening at " + server.info.uri);
    console.log(directoryPath);
});

server.route([{
    method: "POST",
    path: "/api/items",
    config: {
        payload: {
            output: "stream",
            parse: true,
            allow: "multipart/form-data",
            maxBytes: 2 * 1000 * 1000
        }
    },
    handler: (request, response) => {
        var result = [];

        for(var i = 0; i < request.payload["file"].length; i++) {
            result.push(request.payload["file"][i].hapi);
            request.payload["file"][i].pipe(fs.createWriteStream(directoryPath + request.payload["file"][i].hapi.filename))
        }

        if(request.payload["file"].length == undefined)
        {
            result.push(request.payload["file"].hapi);
            request.payload["file"].pipe(fs.createWriteStream(directoryPath + request.payload["file"].hapi.filename))
        }

        response(result);
    }    
},
{
    method: 'GET',
    path: '/api/items',
    handler: function(request, reply) {
        var results = [];
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
              //reply(fs.createReadStream(path.join(directoryPath, file))).header('Content-Type', file.mimetype);
              results.push(fs.createReadStream(path.join(directoryPath, file)));
            });

            reply(results);
        });
    }
  },
  {
    method: 'GET',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      fs.readdir(directoryPath, function (err, files) {
          //handling error
          if (err) {
              return console.log('Unable to scan directory: ' + err);
          } 
          //listing all files using forEach
          files.forEach(function (file) {
              if(request.params.id == request.params.id) {
                 reply(fs.createReadStream(path.join(directoryPath, file))).header('Content-Type', file.mimetype);
              }
          });
      });
    }
  },
  {
    method: 'PUT',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      reply('Put item id: ' + request.params.id);
    }
  },
  {
    method: 'DELETE',
    path: '/api/items/{id}',
      handler: function (request, reply) {
        if (fs.existsSync(directoryPath + request.params.id)) {
            fs.unlink(directoryPath + request.params.id);
            reply('Delete item id: ' + request.params.id);
        }
        else
        {
            reply("Requested image not found");
        }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Hello world');
    }
  }
]);