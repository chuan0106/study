<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            width: 242px;
            height: 200px;
        }
    </style>
</head>
<!--   <li><a href="#"><img src="/images/羽神1.jpg" alt="">
                    <div>雨神1</div>
                </a></li> -->
<!--   $arr[0] = array('href' => '#', 'path' => 'yushen/羽神1.jpg', 'name' => '梁朝伟'); -->

<body>
    <div>
        <ul>
            <?php
            // 1 引入数据 
            include '02.yushen.php';
            // 2解析数据
            for ($i = 0; $i < count($arr); $i++) {
                echo '<li><a href=" ' . $arr[$i]['href'] . ' "><img src=" ' . $arr[$i]['path'] . ' " alt="">  <div> ' . $arr[$i]['name'] . ' </div></a></li>';
            };
            ?>

        </ul>
    </div>
</body>

</html>