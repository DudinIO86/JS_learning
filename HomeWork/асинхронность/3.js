function changeStyleDelayed(nuberId, delay) {
  setTimeout(() => {
    const element = document.getElementById(numberId);
    if (element) {
      element.style.color = "blue";
    }
  }, delay);
}

changeStyleDelayed("colorElement", 5000);
