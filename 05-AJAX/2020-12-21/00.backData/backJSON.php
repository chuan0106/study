<?php
// 设置返回的是json
header('Content-type: application/json');
echo file_get_contents('./data/person.json');
