const Bundler = require("parcel-bundler");
var express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  io = require("socket.io").listen(server),
  GameCollection = require("./games.js").GameCollection,
  games = new GameCollection();

const file = "../../index.html";
const bundler = new Bundler(file);

app.configure(function() {
  app.use(bundler.middleware());
});

server.listen(55555, "0.0.0.0");

var Responses = {
    SUCCESS: 0,
    GAME_EXISTS: 1,
    GAME_NOT_EXISTS: 2,
    GAME_FULL: 3
  },
  Requests = {
    CREATE_GAME: "create-game",
    JOIN_GAME: "join-game"
  };

io.sockets.on("connection", function(socket) {
  socket.on(Requests.CREATE_GAME, function(gameName) {
    if (games.createGame(gameName)) {
      games.getGame(gameName).addPlayer(socket);
      socket.emit("response", Responses.SUCCESS);
    } else {
      socket.emit("response", Responses.GAME_EXISTS);
    }
  });
  socket.on(Requests.JOIN_GAME, function(gameName) {
    var game = games.getGame(gameName);
    if (!game) {
      socket.emit("response", Responses.GAME_NOT_EXISTS);
    } else {
      if (game.addPlayer(socket)) {
        socket.emit("response", Responses.SUCCESS);
      } else {
        socket.emit("response", Responses.GAME_FULL);
      }
    }
  });
});
