<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        background-color: hotpink;
    }
</style>

<body>
    <?php
    header('content-type:text/html;charset="UTF-8"');
    // 使用php 生成页面
    include '02.data-prut.php';  // 引入其他页面的php 获取路径
    // 生成页面的步骤
    // 1 商业的网站的数据 是保存在?==>服务器中的数据库中
    // 这里使用了数组 作为模拟  假数据
    // 2 当用户访问这个页面时
    // 读取数据
    // 3 生成对应的html 代码 让页面好看一点
    echo '<ul>';
    // for ($i = 0; $i < count($starArr); $i++) {
    for ($i = 0; $i < count($arr); $i++) {
        echo '<li>';
        echo $arr[$i]['name'] . '<a href="">点我看</a>' . $arr[$i]['wife'];
        echo '</li>';
    };
    echo '</ul>';
    //     echo '<h2><span style="color:pink;font-size:14px" >' . $starArr[$i]['name'] . '</span>' . ':出演了,' . $starArr[$i]['film'] . '好朋友是:' . $starArr[$i]['wife'] . '<br/></h2>';
    // }
    // 
    ?>
</body>
<a href=""></a>

</html>