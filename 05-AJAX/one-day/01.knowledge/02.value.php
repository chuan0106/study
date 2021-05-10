<?php
//  设置编码格式
header('content-type:text/html;charset="UTF-8"');
// 定义变量  var name='pink;
// 字符串
$name='pink';
echo $name;

// echo '换行';
echo '<br/>';
// 数组
$num=123;
echo $num;
echo '<br/>';

// 小数 
$pi=3.141592653;
echo $pi;
echo '<br/>';
//布尔 

$male = false;
// if语句
if($male == false){
    echo '萌妹子';
}else {
    echo '男人';
};
?>