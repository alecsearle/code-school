let ul = document.getElementById("the-universe");
let button = document.getElementById("button");
button.onclick = () => {
  for (let i = 0; i < ul.children.length; i++) {
    let x = Math.random() * 10;
    if (x < 5) {
      ul.children[i].remove();
    }
  }
};
