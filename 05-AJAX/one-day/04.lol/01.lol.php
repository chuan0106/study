<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            display: inline-block;
        }

        img {
            width: 242px;
            height: 200px;
        }
    </style>
</head>

<!--   <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <img src="/04.lol/images/羽神1.jpg" alt="...">
                            <div class="caption">
                                <h3>雨神</h3>
                                <p></p>
                                <p><a href="#" class="btn btn-primary" role="button">购买</a> <a href="#"
                                        class="btn btn-default" role="button">查看详情</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

<body>
    <div class="panel panel-default">
        <div class="panel-body">
            亚索
        </div>
        <div class="panel-footer">
            <?php
            include './02.lol.php';
            for ($i = 0; $i < count($arr); $i++) {
                echo '<div class="container">
<div class="row">
    <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
            <img src="/images' . $arr[$i]['path'] . '" alt="...">
            <div class="caption">
                <h3>' . $arr[$i]['name'] . '</h3>
                <p></p>
                <p><a href="#" class="btn btn-primary" role="button">购买</a> <a href="#"
                        class="btn btn-default" role="button">查看详情</a></p>
            </div>
        </div>
    </div>
</div>';
            };
            ?>
        </div>
    </div>

</body>

</html>