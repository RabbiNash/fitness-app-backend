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
exports.IdGenerator = void 0;
const nanoid_1 = require("nanoid");
class IdGenerator {
    /**
     * function to generate user id
     * formart
     * N{1233333}
     */
    static generateUserId() {
        return __awaiter(this, void 0, void 0, function* () {
            const nanoid = (0, nanoid_1.customAlphabet)("1234567890", 10);
            return "USR" + nanoid(5);
        });
    }
}
exports.IdGenerator = IdGenerator;
