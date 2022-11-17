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
const app_1 = __importDefault(require("../app"));
const user_service_1 = require("../services/user.service");
app_1.default.get("/users", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield (0, user_service_1.findAll)();
    resp.send(users);
}));
app_1.default.get("/users/:id", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let id = +req.params.id;
    // let idw: number = parseInt(req.params.id, 10);
    // let id: number = Number(req.params.id);
    let user = yield (0, user_service_1.findById)(id);
    resp.send(user);
}));
app_1.default.post("/users", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let user = req.body;
    user = yield (0, user_service_1.save)(user);
    resp.send(user);
}));
app_1.default.patch("/users/:id", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.params.id);
    let user = req.body;
    user = yield (0, user_service_1.update)(id, user);
    console.log("User Id:" + id);
    resp.send(user);
}));
app_1.default.delete("/users/:id", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.params.id);
    yield (0, user_service_1.remove)(id);
    resp.send({ status: "OK" });
}));
