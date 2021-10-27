"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
/*
let n1: number = 10;
let n2: number = 2;

console.log('soma: '+somar(n1,n2) );
console.log('subtração: '+subtrair(n1,n2) );
console.log('multiplicação: '+multiplicar(n1,n2) );
*/
console.log(validator_1.default.isEmail('testeg@gmail.com'));
