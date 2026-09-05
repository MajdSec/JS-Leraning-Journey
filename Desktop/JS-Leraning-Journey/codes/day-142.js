// What it stores: A Set can store anything (Numbers, Strings, Objects).
//  A WeakSet can ONLY store Objects.

// Memory Management: A Set keeps the data forever until you manually delete it.
//  A WeakSet will automatically delete the object from memory if your main system is no longer using it (This is great for saving RAM).

// Looping: You can loop through a Set to see all items. You CANNOT loop through a WeakSet.

// Size: A Set can tell you how many items it has (using .size). 
// A WeakSet cannot tell you its size.

let jfaj = new Set()

let hgoa = new WeakSet()


//-----------------------------------------------------//

// What can be a Key: A Map can use anything as a key (Numbers, Strings, Objects).
//  A WeakMap can ONLY use Objects as keys.

// Memory Management: A Map keeps the data forever until you manually delete it (which can cause memory leaks).
//  A WeakMap automatically deletes the data if your main system removes the original object key (This saves RAM).

// Looping: You can loop through a Map to see all items.
//  You CANNOT loop through a WeakMap.

// Size: A Map can tell you how many items it has (using .size). 
// A WeakMap cannot tell you its size.

// Main Use Case: Use a Map for general dictionaries and permanent data storage. 
// Use a WeakMap to attach extra data to an object temporarily (like a pin with a note) without breaking the memory.

let lkaj = new Map()

let flahn = new WeakMap()

//weak set/map = clean data after work
//  map to give more data
// set just pin