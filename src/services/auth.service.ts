import * as userService from "./user.service";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export async function login(email: string, password: string) {
  let user = await userService.findByEmail(email);
  if (user != null && argon2.verify(user.password, password)) {
    let token = generateAccessToken(user.email);
    return { token: token };
  } else {
    return null;
  }
}

function generateAccessToken(email: string): string {
  return jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });
}
