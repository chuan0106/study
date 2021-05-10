let foo = 'bar';

function add(x, y) {
    return x + y;
}

// exports.add = add;
// exports.str = 'hello';

// 如果一个模块需要直接导出某个成员 而非挂载的方式
// 那这个时候必须是用下面这种方式
// module.exports = add;
module.exports = 'hello';
// 后者会覆盖前者
module.exports = (x, y) => x + y;
module.exports = {
    add: (x, y) => { x + y },
    str: 'hello'
}