<?php
// json 也要设置一段内容(可选)
// 告诉浏览器 返回的是 json 格式 的数据 utf-8
header('content-type:text/json;charset="urf-8"');
$jsonString = file_get_contents('./stars.json');
echo $jsonString;
