const server = require("./api/server.js");

let PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`${PORT} portu dinleniyor...`);
});
