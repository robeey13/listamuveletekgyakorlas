const array = [1, 2, 3, 4 ,5 ]

// push 

console.log("push:" + array.push(4))

// pop

console.log("pop:" + array.pop())

const arra = [11, 12, 13, 14, 15]

// unshift

console.log("unshift:" + array.unshift(0))

// shift

console.log("shift: " + arra.shift())

// SORT

const sortArray = [41, 65, 82, 4]

console.log("sort: " + sortArray.sort((a, b) => a - b))

// SPLICE

const spliceArr = [1, 2, 3, 4, 5]

const removed = spliceArr.splice(1, 2, 8, 9, 7)

console.log(removed, spliceArr)

// REVERSE

const reverseArr = [1, 2, 3, 5, 6, 7, 8]

console.log(reverseArr.reverse())



// NEM MODOSITJUK A TOMBOT // 


// map

const mapArr = [1, 2, 3]

const doubled = mapArr.map(x => x * 2);

console.log(doubled)

// filter

const filterArr = [2, 3, 4, 6]

const harommalOszthato = filterArr.filter(x => x % 3 === 0)

console.log(harommalOszthato)

// find

const findArr = [1, 3, 5, 4, 8]

const elsoParos = findArr.find(x => x % 2 === 0)

console.log(elsoParos)

// findIndex


const elsoParosIndex = findArr.findIndex(x => x % 2 === 0)

console.log(elsoParosIndex)

// every / some

const parosArr = [2, 4, 6]


const nemMindegyikParos = [2, 4, 6, 7]



console.log(parosArr.every(x => x % 2 === 0), nemMindegyikParos.every(x => x % 2 === 0), nemMindegyikParos.some(x => x % 2 != 0), parosArr.some(x => x % 2 != 0))



// includes

console.log(parosArr.includes(4), nemMindegyikParos.includes(8))

// concat

const aArr = [1, 2, 3, 4]

const bArr = aArr.concat([6, 7], [12, 24])

console.log(bArr)

// slice

console.log(aArr.slice(0, 3))

// forEach 

aArr.forEach(element => {
   //ezt nem tudom
});