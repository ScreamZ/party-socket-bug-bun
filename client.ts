// TODO : Toggle this import to test native client vs partysocket one
import { WebSocket } from "partysocket";

const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", () => {
  console.log("✅ Socket opened");
  setInterval(() => socket.send("message"), 5000);
});

socket.addEventListener("message", (message) => {
  console.log("Received message:", message);
});

socket.addEventListener("close", (e) => {
  console.log("❌ Socket closed", e.reason);
});
