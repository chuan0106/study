<?php
// 接受提交的数据 $\_GET
$name = $_GET['name'];
// 假数据模拟=> 数组
$nameArr = array('jack', 'rose',  'yus');
// 判断是否在数组中存在
$result = in_array($name, $nameArr);
// 返回不同的内容给用户即可
if ($result == true) {
    echo '很遗憾已被使用';
} else {
    echo '恭喜您可以使用';
}
// 恭喜你可以用
// 很遗憾用不了
sleep(2);
