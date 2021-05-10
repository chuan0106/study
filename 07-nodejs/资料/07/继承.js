let extend = (source, target) => {
    for (var key in source) {
        target[key] = source[key]
    }
}
let obj1 = {
    foo: 'bar'
}
let obj2 = {
    name: 'jack'
}
extend(obj1.obj2)
console.log(obj2);
console.log(obj1);