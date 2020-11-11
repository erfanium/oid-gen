"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oidHex = exports.oid = void 0;
const crypto_1 = require("crypto");
const PROCESS_UNIQUE = crypto_1.randomBytes(5);
let index = ~~(Math.random() * 0xffffff);
function oid(date = Date.now()) {
    index = (index + 1) % 0xffffff;
    const buffer = Buffer.alloc(12);
    const time = ~~(date / 1000);
    // 4-byte timestamp
    buffer.writeUInt32BE(time, 0);
    // 5-byte process unique
    buffer[4] = PROCESS_UNIQUE[0];
    buffer[5] = PROCESS_UNIQUE[1];
    buffer[6] = PROCESS_UNIQUE[2];
    buffer[7] = PROCESS_UNIQUE[3];
    buffer[8] = PROCESS_UNIQUE[4];
    // 3-byte counter
    buffer[11] = index & 0xff;
    buffer[10] = (index >> 8) & 0xff;
    buffer[9] = (index >> 16) & 0xff;
    return buffer;
}
exports.oid = oid;
function oidHex(date) {
    return oid(date).toString('hex');
}
exports.oidHex = oidHex;