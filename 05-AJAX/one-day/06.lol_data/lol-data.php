<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    //    接受数据 超全局变量
    // print_r($_GET);
    // Array ( [lolHero] => 亚索 ) 
    // echo $_GET['lolHero'];
    $heroName =  $_GET['lolHero'];
    // 查询数据 模拟的假数据查询
    include './02.lol.php';
    $hero = $arr[$heroName];
    print_r($hero);
    echo '<br/>';
    // 生成页面返回给用户  创建好看的html页面
    echo '<h1>' . $hero['name'] . '--<span>' . $hero['sex'] . '</span></h1>';
    echo '<h1>' . $hero['sing'] . '</h1>';
    ?>
</body><a href=""></a>

</html>