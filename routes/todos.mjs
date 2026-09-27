import express from "express";
import { validateTodo } from "../middlewares/validateTodo.mjs";

const todoRouter = express.Router();

const TODOS = [
    {
        id: "1",
        title: "ทำการบ้าน",
        done: false,
        priority: "high"
    },
    {
        id: "2",
        title: "อ่านหนังสือ",
        done: false,
        priority: "medium"
    },
    {
        id: "3",
        title: "ส่งงาน Workshop",
        done: true,
        priority: "high"
    },
    {
        id: "4",
        title: "เตรียม Present",
        done: false,
        priority: "low"
    }
];

// GET /health
todoRouter.get("/health", (req, res) => {
    return res.json({
        status: "ok"
    });
});

// GET /
todoRouter.get("/", (req, res) => {
    return res.json(TODOS);
});

// GET /:id
todoRouter.get("/:id", (req, res) => {
    const todo = TODOS.find(item => item.id === req.params.id);

    if (!todo) {
        return res.status(404).json({
            error: `ไม่พบรายการ ${req.params.id}`
        });
    }

    return res.json(todo);
});

// POST /todos
todoRouter.post("/todos", validateTodo, (req, res) => {
    const newTodo = {
        id: String(TODOS.length + 1),
        title: req.body.title,
        done: req.body.done ?? false,
        priority: req.body.priority ?? "medium"
    };

    TODOS.push(newTodo);

    return res.status(201).json(newTodo);
});

export default todoRouter;