<?php
// 设置返回的是json
echo '111l';
header('content-type:text/xml;charset="urf-8"');
// 读取并返回
echo file_get_contents('./data/person.xml');
