<?php
// 定义数组 -- 索引数组
$fooArr = array('食物', '榴莲', '西蓝花', '鸡蛋', '西蓝花炒蛋');
// 获取数组元素
// 从索引0开始
echo $fooArr[3];
//直接打印 数组的所有内容
echo $fooArr;
// 直接输出复杂类型
print_r($fooArr);
echo '<br/>';
// 遍历 咋没有.length
// 获取数组的长度
echo count($fooArr);
for ($i = 0; $i < count($fooArr); $i++) {
    echo $fooArr[$i];
    echo '<br/>';
}
