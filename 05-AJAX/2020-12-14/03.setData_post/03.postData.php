<?php
print_r($_POST);
// 拼接一些html结构
// 直接返回 
//  post 提交
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>没想到啊 你竟然喜欢吃 <?php echo $_POST['food']; ?> </h2>
    <h3>而且用 <?php echo $_POST['doType']; ?> 种方法来吃</h3>
</body>

</html>
