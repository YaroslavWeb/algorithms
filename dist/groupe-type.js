"use strict";
const groupArray = (array) => {
    let res = {
        object: [],
        number: [],
        string: [],
        boolean: [],
        undefined: [],
        null: [],
        array: [],
    };
    for (let i = 0; i < array.length; i++) {
        if (array[i] === null) {
            res.null = [...res.null, array[i]];
            continue;
        }
        if (array[i] === undefined) {
            res.undefined = [...res.undefined, array[i]];
            continue;
        }
        if (Array.isArray(array[i])) {
            res.array = [...res.array, array[i]];
            continue;
        }
        if (typeof array[i] === 'number') {
            res.number = [...res.number, array[i]];
            continue;
        }
        if (typeof array[i] === 'string') {
            res.string = [...res.string, array[i]];
            continue;
        }
        if (typeof array[i] === 'boolean') {
            res.boolean = [...res.boolean, array[i]];
            continue;
        }
        if (typeof array[i] === 'object') {
            res.object = [...res.object, array[i]];
            continue;
        }
    }
    return res;
};
const arr = [
    { value: 1 },
    { value: 2 },
    5,
    6,
    7,
    'test',
    'test2',
    'test3',
    'test4',
    false,
    null,
    undefined,
    [123],
    [456],
];
console.log(groupArray(arr));
const pow = (a, n) => {
    if (n === 1)
        return a;
    return a * pow(a, n - 1);
};
function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.x = function () {
        return currentSum;
    };
    return f;
}
console.log(sum(4)(2)(8).x()); // 14
