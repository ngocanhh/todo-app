import { Prisma, PrismaClient, User } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient({ log: ["query"] });

export async function findByEmail(email: string) {
  let user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

export async function findById(id: number) {
  let user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

export async function findAll() {
  let users = await prisma.user.findMany();
  return users;
}

export async function save(user: User) {
  user.password = await argon2.hash(user.password);
  user = await prisma.user.create({ data: user });
  return user;
}

export async function update(
  id: User["id"],
  data: Prisma.UserUpdateArgs["data"]
) {
  let user = await prisma.user.update({
    where: { id },
    data,
  });
  return user;
}

export async function remove(id: number) {
  let user = await prisma.user.delete({
    where: { id },
  });
  return user;
}
