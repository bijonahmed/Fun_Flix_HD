document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == "interactive") {
    } else if (state == "complete") {
      setTimeout(function () {
        document.getElementById("loader-main").style.visibility="hidden";
      }, 500);
    }
  };