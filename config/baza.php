<?php
return array(
	'db' => array(
		'driver' 		 => 'Pdo',
		'dsn' 	 		 => 'mysql:host=sciendar.mysql.ukraine.com.ua;dbname=sciendar_db',
		'username' => 'sciendar_db',
		'password' => '5RKxPkPr',
		'driver_options' => array(
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''
		),
	),

);
