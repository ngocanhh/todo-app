import app from "../app";
import {
  findAll,
  findById,
  remove,
  save,
  update,
} from "../services/user.service";

app.get("/users", async (req, resp) => {
  let users = await findAll();
  resp.send(users);
});

app.get("/users/:id", async (req, resp) => {
  let id: number = +req.params.id;
  let user = await findById(id);
  resp.send(user);
});

app.post("/users", async (req, resp) => {
  let user = req.body;
  user = await save(user);
  resp.send(user);
});

app.patch("/users/:id", async (req, resp) => {
  let id: number = +req.params.id;
  let user = req.body;
  user = await update(id, user);
  resp.send(user);
});

app.delete("/users/:id", async (req, resp) => {
  let id: number = +req.params.id;
  await remove(id);
  resp.send({ status: "OK" });
});
