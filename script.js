function isSameType(value1, value2) {
  // Case 1: both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Case 2: one is NaN, the other is not
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // Case 3: regular type comparison
  return typeof value1 === typeof value2;
}

// ✅ Examples
console.log(isSameType(1, 3));        // true
console.log(isSameType("hey", "hi")); // true
console.log(isSameType(NaN, NaN));    // true
console.log(isSameType("3", 3));      // false
console.log(isSameType(5, NaN));      // false
