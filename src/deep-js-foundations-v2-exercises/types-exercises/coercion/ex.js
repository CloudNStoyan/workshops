// TODO: write the validation functions

function isValidName(name) {
  if (typeof(name) != 'string') {
    return false;
  }

  if (name.trim().length < 3) {
    return false;
  }

  return true;
}

function hoursAttended(attended, length) {
  const isNotStringOrNumber = (val) => !(typeof(val) === 'string' || typeof(val) === 'number');

  if (isNotStringOrNumber(attended) || isNotStringOrNumber(length)) {
    return false;
  }

  const isStringAndEmpty = (val) => typeof(val) === 'string' && val.trim().length === 0;

  if (isStringAndEmpty(attended) || isStringAndEmpty(length)) {
    return false;
  }

  const attendedNumber = Number(attended);
  const lengthNumber = Number(length);

  if (Number.isNaN(attendedNumber) || Number.isNaN(lengthNumber)) {
    return false;
  }

  if (attendedNumber < 0 || lengthNumber < 0) {
    return false;
  }

  const isNotAWholeNumber = (num) => num.toString().includes('.');

  if (isNotAWholeNumber(attendedNumber) || isNotAWholeNumber(lengthNumber)) {
    return false;
  }

  if (attendedNumber > lengthNumber) {
    return false;
  }

  return true;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
