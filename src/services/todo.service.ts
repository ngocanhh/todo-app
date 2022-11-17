import { Prisma, PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

export async function save(todo: Todo): Promise<Todo> {
  todo = await prisma.todo.create({
    data: todo,
  });
  return todo;
}

export async function getAll() {
  let todos = await prisma.todo.findMany();
  return todos;
}

export async function getById(id: number) {
  let todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
    // include: {
    //   user: true,
    // },
  });
  return todo;
}

export async function deleteById(id: number) {
  let todo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  return todo;
}
