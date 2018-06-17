<?php

require_once '/app/vendor/autoload.php';

$faker = Faker\Factory::create();
$name = $faker->name;

echo 'Hello, my name is ', $name, PHP_EOL;
