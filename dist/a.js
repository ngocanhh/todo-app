"use strict";
// setImmediate(() => {
//   console.log("2s");
// });
// setTimeout(() => {
//   console.log("t");
// }, 0);
// console.log("abc");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// setTimeout(() => {
//   soChe();
//   setTimeout(() => {
//     nau();
//     setTimeout(() => {
//       an();
//     });
//   }, 2000);
// }, 0);
function soChe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("so che");
            resolve(1);
        }, 2000);
    });
}
console.log("start");
new Promise((resolve, reject) => {
    console.log("start so che");
    setTimeout(() => {
        console.log("so che");
        resolve(1);
    }, 2000);
});
console.log("end");
function nau() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("nau");
            resolve(1);
        }, 5000);
    });
}
function an() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("an");
            resolve(1);
        }, 5000);
    });
}
// soChe().then(nau).then(an).catch(console.error);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield soChe();
        yield nau();
        yield an();
    });
}
