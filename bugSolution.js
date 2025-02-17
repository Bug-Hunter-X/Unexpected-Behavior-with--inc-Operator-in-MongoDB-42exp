```javascript
// Corrected usage of $inc operator with error handling
db.collection.updateOne(
  { name: "John" },
  { $inc: { age: -1 } },
  { upsert: false, multi: false }
);

//More robust solution to prevent age from going below zero
db.collection.updateOne(
  { name: "John", age: { $gt: 0 } },
  { $inc: { age: -1 } },
  { upsert: false, multi: false }
);
```