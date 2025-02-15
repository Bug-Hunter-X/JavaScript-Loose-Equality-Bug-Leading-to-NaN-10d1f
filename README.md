# JavaScript Loose Equality Bug
This repository demonstrates a common JavaScript bug stemming from the loose equality operator (==). The bug causes unexpected NaN results when dealing with null and undefined values. 

## Bug Description
The provided JavaScript function `foo` intends to return 0 when the input `x` is null and `x + 1` otherwise. However, due to the use of loose equality, it incorrectly returns 0 when `x` is undefined, leading to a subsequent NaN (Not a Number) error if the return value is used in calculations that expect a number.

## Bug Solution
The solution uses the strict equality operator (===) to explicitly check for null, avoiding the unintended behavior. This ensures that only null values return 0 while undefined values are handled appropriately in subsequent parts of the code (they would throw an error or return NaN, depending on the context).