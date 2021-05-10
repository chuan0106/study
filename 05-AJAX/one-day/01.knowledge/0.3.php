<?php
// 选择语句
$day = '周末';
switch ($day) {
    case '礼拜一':
    case '礼拜二':
    case '礼拜三':
    case '礼拜四':
    case '礼拜五';
        echo '上班班';
        break;
    case '礼拜六';
        echo '上班班';
    case '周末';
        echo '休息';
        break;
    default:
        echo '终于休息了';
        break;
}
// 循环语句 
// for 
for ($i = 0; $i < 10; $i++) {
    echo '<br/>';
    // php中 拼接字符串 用.
    echo '感觉自己萌萌哒' . $i;
}

// while 
$num = 0;
while ($num <= 998) {
    echo '哈哈' . $num;
    echo '<br/>';
    $num++;
}
while (false) {
    echo '人呢人呢';
}


// do while
do {
    echo '进来了吗';
} while (false);
?>