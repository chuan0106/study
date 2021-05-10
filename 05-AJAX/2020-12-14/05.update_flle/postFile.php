<?php
// 接受提交的文件
// 超全局变量 用来接受提交的文件
print_r($_FILES);
/*
Array (
     [icon] => Array (
          [name] => 微信图片_202012061610132.jpg   上传文件名
          [type] => image/jpeg   // 类型
          [tmp_name] => C:\Windows\php4644.tmp   临时路径
          [error] => 0  错误编码
          [size] => 48523 ) )  大小
*/


// php 代码执行完毕之后 临时文件就被销毁了
// 如果想要看到那个临时文件 可以 让php代码 执行的稍微慢一些 休息一会
// sleep(12);    // 休息的意思  让大家看到临时文件
// move_uploaded_file(file,newloc)
// 两个参数 
// 参数1 移动的文件
// 参数2 移动到哪里去
$yd = $_FILES['icon']['tmp_name'];
echo $yd;
echo '<br/>';
$move = $_FILES['icon']['name'];
echo $move;
move_uploaded_file($yd, "./files/" . $move);

/*
如果要严谨一些 还需要添加一些判断
判断文件类型
判断文件是否存在
判断文件的大小
*/
