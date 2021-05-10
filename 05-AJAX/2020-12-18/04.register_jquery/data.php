<?php
header('content-type:text/html;charset="UTF-8"');
//接收用户数据
// 假数据
// echo file_get_contents('../00.backData/data/person.json');
$starName = $_GET['name'];
$starArr = array(
    array('name' => '刘德华', 'film' => '无间道', 'wife' => '梁朝伟'),
    array('name' => '吴京', 'film' => '战狼', 'wife' => '谢楠'),
    array('name' => '曾小贤', 'film' => '爱情公寓', 'wife' => '胡一菲'),
    array('name' => '成龙', 'film' => '警察故事', 'wife' => '李小龙')

);
print_r($starArr);
//查询数据
$someOne = $personArr[$starName];
// 返回结果 路径
print_r($personArr);
echo '|||';
echo $someOne['info'];
