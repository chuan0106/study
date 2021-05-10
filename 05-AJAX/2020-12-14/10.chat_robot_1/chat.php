<?php
// 休息一秒
sleep(1);
// 获取用户发送的消息 (可选)
// 后端 对于用户发来的时候 是否使用 (可选)
// 根据发送过来的消息 返回 不同的内容
$messageList = array(
    '你好啊',
    '我还有吃饭',
    '川哥哥好帅啊',
    '我好爱川哥哥',
    '我淘你猴子'
);
// 从数组中 每次 随机 取出
// array_rand 返回的是一个随机的目标
$randomKey = array_rand($messageList, 1);
// 使用随机 目标 返回 随机的值
echo $messageList[$randomKey];
