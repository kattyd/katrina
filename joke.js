const joke = document.getElementById("joke");

joke.onmouseover = function () {
    joke.innerHTML = "Because light attracts bugs";
  };

  joke.onmouseout = function () {
    joke.innerHTML = "Why do programmers love dark mode?";
  };