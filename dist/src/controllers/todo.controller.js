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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = require("../services/todo.service");
const app_1 = __importDefault(require("../app"));
app_1.default.post("/todos", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let todo = req.body;
    todo = yield (0, todo_service_1.save)(todo);
    resp.status(201).send(todo);
}));
app_1.default.get("/todos", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let todos = yield (0, todo_service_1.getAll)();
    resp.send(todos);
}));
app_1.default.get("/todos/:id", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.params.id);
    let todo = yield (0, todo_service_1.getById)(id);
    resp.send(todo);
}));
app_1.default.delete("/todos/:id", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let id = +req.params.id;
    let todo = yield (0, todo_service_1.deleteById)(id);
    resp.status(200).send(todo);
}));
