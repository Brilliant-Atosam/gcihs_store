import "dotenv/config.js";
import "./db_connection.js";
import items_routes from "./routes/items.js";
import auth_routes from "./routes/auth.js";
import dispensary_routes from "./routes/dispensary.js";
import express, { json } from "express";
const server = express();
server.use(json());

server.use("/api/auth", auth_routes);
server.use("/api/items", items_routes);
server.use("/api/dispensary", dispensary_routes);
server.listen(9000, () => console.log("GCIHS stores server is running"));
