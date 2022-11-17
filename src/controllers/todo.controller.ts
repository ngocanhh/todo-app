import { deleteById, getAll, getById, save } from "../services/todo.service";
import app from "../app";

app.post("/todos", async (req, resp) => {
  let todo = req.body;
  todo = await save(todo);
  resp.status(201).send(todo);
});

app.get("/todos", async (req, resp) => {
  let todos = await getAll();
  resp.send(todos);
});

app.get("/todos/:id", async (req, resp) => {
  let id: number = Number(req.params.id);
  let todo = await getById(id);
  resp.send(todo);
});

app.delete("/todos/:id", async (req, resp) => {
  let id: number = +req.params.id;
  let todo = await deleteById(id);
  resp.status(200).send(todo);
});
