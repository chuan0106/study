<?php
header('content-type:text/html;charset="UTF-8"');
// 关系型数组
// 二维数组
$starArr = array(
    array('name' => '刘德华', 'film' => '无间道', 'wife' => '梁朝伟'),
    array('name' => '吴京', 'film' => '战狼', 'wife' => '谢楠'),
    array('name' => '曾小贤', 'film' => '爱情公寓', 'wife' => '胡一菲'),
    array('name' => '成龙', 'film' => '警察故事', 'wife' => '李小龙')

);
echo $starArr[2]['name']; //
for ($i = 0; $i < count($starArr); $i++) {

    echo '<h2><span style="color:pink;font-size:14px" >' . $starArr[$i]['name'] . '</span>' . ':出演了,' . $starArr[$i]['film'] . '好朋友是:' . $starArr[$i]['wife'] . '<br/></h2>';
}
?>
<a href="#">哈哈</a>
<style>
    span {
        color: yellow;
    }
</style>