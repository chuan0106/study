<?php
header('content-type:text/html;charset=utf-8');
sleep(1);
$chatArr = array(
    "不喜欢你啦",
    "讨厌你啦",
    "吃醋！",
    "哼╭(╯^╰)╮"
);
// array_rand返回的是一个随机的下标
$num = array_rand($chatArr, 1);

echo $chatArr[$num];
