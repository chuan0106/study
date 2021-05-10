<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 1200px;
            height: 30px;
            margin: 0 auto;
            background-color: pink;
            line-height: 30px;
        }

        ul li {
            float: left;
        }

        .f2 {
            float: right;
            margin-right: 150px;

        }
    </style>
</head>

<body>
    <div>
        <div class="fl">
            <?php
            echo '<ul>
            <li>品优购欢迎您! &nbsp;</li>
            <li class="f2"> <a href="#">请登录</a> 品优购欢迎您! &nbsp;<a href="#" class="style-red">免费注册</a> </li>
        </ul>'
            ?>
        </div>
    </div>
</body>

</html>