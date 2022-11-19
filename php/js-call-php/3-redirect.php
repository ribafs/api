<!DOCTYPE html>
<html>
  <head>
    <title>Redirection with Query String</title>
  </head>
  <body>
    <!-- (A) HTML FORM -->
    <form onsubmit="return redirect();">
      <input type="number" id="numA" value="123" required/>
      <input type="number" id="numB" value="456" required/>
      <input type="submit" value="Go!"/>
    </form>

    <!-- (B) JAVASCRIPT -->
    <script>
    function redirect () {
      // (B1) URL SEARCH PARAMS (QUERY STRING)
      var params = new URLSearchParams();
      params.set("numA", document.getElementById("numA").value);
      params.set("numB", document.getElementById("numB").value);

      // (B2) REDIRECTION
      window.location.href = "3-redirect.php?" + params.toString();
      return false;
    }
    </script>

    <!-- (C) RESULTS -->
    <?php
    if (isset($_GET["numA"])) { require "0-dummy.php"; }
    ?>
  </body>
</html>
