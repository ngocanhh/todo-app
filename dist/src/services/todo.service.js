"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.getById = exports.getAll = exports.save = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ["query"] });
function save(todo) {
    return __awaiter(this, void 0, void 0, function* () {
        todo = yield prisma.todo.create({
            data: todo,
        });
        return todo;
    });
}
exports.save = save;
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let todos = yield prisma.todo.findMany();
        return todos;
    });
}
exports.getAll = getAll;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let todo = yield prisma.todo.findUnique({
            where: {
                id: id,
            },
            // include: {
            //   user: true,
            // },
        });
        return todo;
    });
}
exports.getById = getById;
function deleteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let todo = yield prisma.todo.delete({
            where: {
                id: id,
            },
        });
        return todo;
    });
}
exports.deleteById = deleteById;
