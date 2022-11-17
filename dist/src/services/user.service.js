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
exports.remove = exports.update = exports.save = exports.findAll = exports.findById = exports.findByEmail = void 0;
const client_1 = require("@prisma/client");
const argon2_1 = __importDefault(require("argon2"));
const prisma = new client_1.PrismaClient({ log: ["query"] });
function findByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    });
}
exports.findByEmail = findByEmail;
function findById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    });
}
exports.findById = findById;
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let users = yield prisma.user.findMany();
        return users;
    });
}
exports.findAll = findAll;
function save(user) {
    return __awaiter(this, void 0, void 0, function* () {
        user.password = yield argon2_1.default.hash(user.password);
        user = yield prisma.user.create({
            data: user,
        });
        return user;
    });
}
exports.save = save;
function update(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield prisma.user.update({
            where: {
                id,
            },
            data: data,
        });
        return user;
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield prisma.user.delete({
            where: {
                id: id,
            },
        });
        return user;
    });
}
exports.remove = remove;
