/* eslint-disable quotes */
import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

export async function save(todo: Todo): Promise<Todo> {
  // eslint-disable-next-line no-param-reassign
  todo = await prisma.todo.create({
    data: todo,
  });
  return todo;
}

export async function getAll() {
  const todos = await prisma.todo.findMany();
  return todos;
}

export async function getById(id: number) {
  const todo = await prisma.todo.findUnique({
    where: { id },
    include: { user: true },
  });
  return todo;
}

export async function deleteById(id: number) {
  const todo = await prisma.todo.delete({
    where: { id },
  });
  return todo;
}
