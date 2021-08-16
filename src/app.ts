const names: Array<string> = [];
names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved');
  }, 1000);
});

promise.then((data) => {
  data.split(' ');
});

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const objA = { name: 'Max', hobbies: ['Sports'] };
const objB = { age: 30 };
const mergedObj = merge(objA, objB);
