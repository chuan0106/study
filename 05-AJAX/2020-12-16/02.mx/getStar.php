<?php

//接收用户数据
// 假数据
$starName = $_GET['name'];
// 准备图片的版本
$personArr = array(
    '雨神' => array('icon' => 'img/羽神1.jpg', 'info' => '发哦粉色'),
    '关羽' => array('icon' => 'img/羽神2.jpg', 'info' => '原谅色'),
    '刘备' => array('icon' => 'img/羽神3.jpg', 'info' => '咖啡色'),
    '张飞' => array('icon' => 'img/羽神4.jpg', 'info' => '哈哈啊')
);
//查询数据
$someOne = $personArr[$starName];
// 返回结果 路径
echo $someOne['icon'];
echo '|||';
echo $someOne['info'];
