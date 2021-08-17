"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const objA = { name: 'Max', hobbies: ['Sports'] };
const objB = { age: 30 };
const mergedObj = merge(objA, objB);
console.log(mergedObj);
//# sourceMappingURL=app.js.map