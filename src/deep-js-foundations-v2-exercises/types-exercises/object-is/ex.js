// TODO: define polyfill for `Object.is(..)`

Object.is = function ObjectIs(a, b) {

    const customIsNegativeZero = (value) => typeof(value) == "number" && 1 / value === -Infinity;

    if (customIsNegativeZero(a) || customIsNegativeZero(b)) {
	return (customIsNegativeZero (a) && customIsNegativeZero (b));
    }

    const customIsNaN = (value) => typeof(value) == "number" && !(value > 0) && !(value < 0) && value != 0 && !customIsNegativeZero(value);

    if (customIsNaN(a) || customIsNaN(b)) {
      return (customIsNaN(a) && customIsNaN(b));
    }

    return a === b;    
};


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
