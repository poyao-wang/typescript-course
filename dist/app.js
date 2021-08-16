"use strict";
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', ' Schwarz');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' },
};
const nullishCheckIfNull = null !== null && null !== void 0 ? null : 'isNull';
const nullishCheckIfUndefined = undefined !== null && undefined !== void 0 ? undefined : 'isUndefined';
const nullishWillNotCheckEmptyString = '' !== null && '' !== void 0 ? '' : 'isEmptyString';
const nullishWillNotCheckZero = 0 !== null && 0 !== void 0 ? 0 : 'isZero';
console.log('---??---');
console.log('nullishCheckIfNull:', nullishCheckIfNull);
console.log('nullishCheckIfUndefined:', nullishCheckIfUndefined);
console.log('nullishWillNotCheckEmptyString:', nullishWillNotCheckEmptyString);
console.log('nullishWillNotCheckZero:', nullishWillNotCheckZero);
const falsyCheckIfNull = null || 'isNull';
const falsyCheckIfUndefined = undefined || 'isUndefined';
const falsyCheckWillCheckEmptyString = '' || 'isEmptyString';
const falsyCheckWillCheckZero = 0 || 'isZero';
console.log('---||---');
console.log('falsyCheckIfNull:', falsyCheckIfNull);
console.log('falsyCheckIfUndefined:', falsyCheckIfUndefined);
console.log('falsyCheckWillCheckEmptyString:', falsyCheckWillCheckEmptyString);
console.log('falsyCheckWillCheckZero:', falsyCheckWillCheckZero);
//# sourceMappingURL=app.js.map