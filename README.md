# MongoDB $inc Operator Bug

This repository demonstrates an issue with the MongoDB `$inc` operator.  The original code incorrectly uses `$inc` to decrement an age, potentially leading to unexpected results (like negative ages) if the age is already zero or lower. The solution provides a more robust method to handle age decrements.

## Bug
The original code attempts to decrement a user's age using `$inc`. However, it fails to handle the edge case where the age is already zero or less, which could result in a negative age.

## Solution
The solution introduces error handling and a check to prevent decrementing below zero. It uses a conditional update to perform the age decrement only if the age is greater than zero.