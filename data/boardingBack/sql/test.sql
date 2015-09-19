CREATE TABLE `tests` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`text` varchar(255) NOT NULL,
	`deleted_at` int(11) DEFAULT NULL DEFAULT 0,
	`created_at` int(11) DEFAULT NULL,
	`updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
