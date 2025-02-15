function foo(x) {
  if (x == null) {
    return 0; // This line is the bug
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: NaN