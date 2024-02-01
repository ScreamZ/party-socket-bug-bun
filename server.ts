const server = Bun.serve({
  fetch(req, server) {
    const success = server.upgrade(req);
    if (success) {
      // Bun automatically returns a 101 Switching Protocols
      // if the upgrade succeeds
      return undefined;
    }

    return new Response("Hello world!");
  },
  websocket: {
    open() {
      console.log("✅ Socket opened");
    },
    async message(ws, message) {
      console.log("Mirroring message:", message);
      ws.send(message);
    },
    close() {
      console.log("❌ Socket closed");
    },
  },
});

console.log("Server rdy", server.hostname, server.port);
