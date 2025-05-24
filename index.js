// index.js
const Eris = require("eris");
const startServer = require("./keep_alive.js");

startServer(); // inicia o servidor HTTP para o UptimeRobot

// Lista de tokens de múltiplos bots
const tokens = [
  process.env.TOKEN1,
  process.env.TOKEN2,
  process.env.TOKEN3,
  process.env.TOKEN4,
  process.env.TOKEN5,
  process.env.TOKEN6,
  process.env.TOKEN7,
  process.env.TOKEN8,
  process.env.TOKEN9,
  process.env.TOKEN10,
  process.env.TOKEN11,
  process.env.TOKEN12,
  process.env.TOKEN13,
];

const bots = [];

tokens.forEach((token, index) => {
  if (!token) {
    console.error(`Token ${index + 1} não definido.`);
    return;
  }

  const bot = new Eris(token);

  bot.on("ready", () => {
    console.log(`Bot ${index + 1} conectado como ${bot.user.username}`);
  });

  bot.on("error", (err) => {
    console.error(`Erro no bot ${index + 1}:`, err);
  });

  bot.connect();
  bots.push(bot);
});
