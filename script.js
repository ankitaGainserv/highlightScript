window.onload = () => {
  var d = document.createElement("div");
  d.style.backgroundColor = "rgb(100, 0, 100, 0.5)";
  d.style.position = "absolute";
  d.style.zIndex = 1000;
  d.style.pointerEvents = "none";
  document.body.appendChild(d);
  let inputs = document.getElementsByTagName("INPUT");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
  window.addEventListener("mouseover", (e) => {
    var pos = e.target.getBoundingClientRect();

    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    var width = pos.width;
    var height = pos.height;
    var top = Math.max(0, pos.top + scrollTop);
    var left = Math.max(0, pos.left + scrollLeft);

    d.style.width = width + "px";
    d.style.height = height + "px";
    d.style.top = top + "px";
    d.style.left = left + "px";
    d.style.visibility = "visible";
    d.style.transition = "all 0.3s ease";
    // d.style.zIndex = 999999999999999;
  });

  window.addEventListener("mouseout", (e) => {
    d.style.visibility = "hidden";
  });

  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  document.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log(e.target);
    },
    true
  );
  //   window.addEventListener("click", (e) => {});
};
