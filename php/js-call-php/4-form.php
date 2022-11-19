<!DOCTYPE html>
<html>
  <head>
    <title>NINJA Form Submission</title>
  </head>
  <body>
    <!-- (A) HIDDEN HTML FORM -->
    <form id="ninja" method="post" style="display:none;">
      <input type="hidden" id="numA" name="numA" required/>
      <input type="hidden" id="numB" name="numB" required/>
    </form>

    <!-- (B) JAVASCRIPT -->
    <input type="button" value="Go!" onclick="go()"/>
    <script>
    function go () {
      document.getElementById("numA").value = "123";
      document.getElementById("numB").value = "456";
      document.getElementById("ninja").submit();
    }
    </script>

    <!-- (C) RESULTS -->
    <?php
    if (isset($_POST["numA"])) { require "0-dummy.php"; }
    ?>
  </body>
</html>
