export function validateTodo(req, res, next) {
    const { title, done, priority } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            error: "ต้องมี title เป็นข้อความ"
        });
    }

    if (done !== undefined && typeof done !== "boolean") {
        return res.status(400).json({
            error: "done ต้องเป็น boolean"
        });
    }

    if (
        priority !== undefined &&
        !["low", "medium", "high"].includes(priority)
    ) {
        return res.status(400).json({
            error: "priority ต้องเป็น low, medium หรือ high"
        });
    }

    next();
}