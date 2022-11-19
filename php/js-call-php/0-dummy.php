<?php
if (isset($_GET["BAD"])) {
  $total = $_GET["numA"] + $_GET["numB"];
  echo "alert($total);";
} else {
  print_r($_POST);
  print_r($_GET);
}
