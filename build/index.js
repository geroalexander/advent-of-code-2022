"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const hello = () => {
    console.log("Hello World");
};
hello();
const fs_1 = require("fs");
const readFile = () => {
    (0, fs_1.readFileSync)("../src/Day1/input", "utf-8");
};
exports.readFile = readFile;
