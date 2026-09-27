import express from "express";
import todoRouter from "./routes/todos.mjs";

const app = express();

app.use(express.json());

app.use("/api/v1/todos", todoRouter);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});