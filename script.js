window.onload = () => {
  var d = document.createElement("div");
  d.style.backgroundColor = "rgb(100, 0, 100, 0.5)";
  d.style.position = "absolute";
  d.style.zIndex = 2147483647;
  d.style.pointerEvents = "none";
  document.body.appendChild(d);

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
  });

  window.addEventListener("mouseout", (e) => {
    d.style.visibility = "hidden";
  });
  //callback function definition
  const callback = (obj) => {
    console.log(obj);
    //do something with obj
  };

  var links = document.getElementsByTagName("a");
  let inputs = document.getElementsByTagName("INPUT");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
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
      let id;
      if (e.target.attributes.id) {
        id = `#${e.target.id}`;
      } else if (e.target.attributes.class) {
        let ele = document.getElementsByClassName(e.target.className);
        if (ele.length > 1) {
          for (let i = 0; i < ele.length; i++) {
            if (e.target === ele[i]) {
              id = `.${e.target.className + "-type-" + i}`;
            }
          }
        } else {
          id = `.${e.target.className}`;
        }
      } else {
        let { parentNode: currentParent } = e.target;
        while (currentParent.id === "" && currentParent.className === "") {
          currentParent = currentParent.parentNode;
        }
        let parentId =
          currentParent.id !== ""
            ? `#${currentParent.id}`
            : `.${currentParent.className}`;

        let allTags = document.getElementsByTagName(e.target.tagName);
        for (let i = 0; i < allTags.length; i++) {
          if (e.target === allTags[i]) {
            id = `${parentId}-${e.target.tagName}-type-${i}`;
          }
        }
      }
      callback({ id, left: e.pageX, top: e.pageY });
    },
    true
  );
};
