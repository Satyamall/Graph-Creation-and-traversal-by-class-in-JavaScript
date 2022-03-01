
let node = new Map();

node.set(0,5)
// node.set(2,9)
node.set(2,[1,2,43,53])
node.set(3,6)

// node.set([],5)
// node.set({},9)
// node.set('string',6)

let val = node.get(2)
val.push(32)
node.set(2,val);


// console.log(node.get(2))
// console.log(node.delete(2))
console.log(node)

// console.log(node.keys())
// console.log(node.values())

// let iterator = node.keys()
let iterator = node.values()

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)