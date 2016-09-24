<?php

if (!isset($page_title))
    $page_title = 'Website';

$content_only = isset($_SERVER['HTTP_CONTENT_ONLY']) && $_SERVER['HTTP_CONTENT_ONLY'] == 1;

if ($content_only)
    header('Page-Title: ' . $page_title);
else {

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $page_title ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <a href="./">Home</a>
        <a href="./about.php">About</a>
        <a href="./contact.php">Contact</a>
        <a href="https://www.google.com/">Google</a>
    </nav>
    <main>
<?php

}
