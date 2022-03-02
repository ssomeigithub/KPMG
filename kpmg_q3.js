const obj = {"x":{"y":{"z":"a"}}}
const keys = ['x', 'y', 'z']


const value = keys.reduce((bbq,key)=>bbq[key], obj)// "a1"
console.clear()
console.log(value)
