<?php
// 索引数组
$person = array('name' => '吴京', 'film' => '战狼', 'wife' => '谢楠');
// 获取内容
echo $person['wife'];
// 完整输出数组
print_r($person);
echo '<br/>';
// 遍历数组
// $key 循环的键
// $value 循环的值
foreach ($person as $key => $value) {
    echo $key . '.....' . $value . '<br/>';
}
?>