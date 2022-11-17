import app from "../app";
import * as authService from "../services/auth.service";

app.post("/login", async (req, resp) => {
  let email = req.body.email;
  let password = req.body.password;
  let token = await authService.login(email, password);
  if (token != null) {
    resp.status(200).send(token);
  } else {
    resp.status(400).send({ message: "email or password invalid" });
  }
});
