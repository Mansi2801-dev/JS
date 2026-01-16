//for of
const numbers = [1,2,3,4,5]
for (const num of numbers) {
    //console.log(`The number is ${num}`)
}
//cannot be used for objects, but for in can be used
//for in does not work on map

const mymap = new Map()
mymap.set('IN', "India"),
mymap.set('AUS', 'Australia')
console.log(mymap)

for (const [key, value] of mymap) {
    console.log(`${key} -: ${value}`)
}