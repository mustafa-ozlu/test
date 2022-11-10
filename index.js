const dugme = document.getElementById("sil");
const div = document.getElementById("container");
console.log(div);

dugme.addEventListener("click", function () {
  console.log(dugme.innerText);
  if (dugme.innerText == "geri getir") {
    div.innerHTML = `<h1 >gjgjgjhgjh</h1>
        <h1 >mustafa</h1>
        <h1 >gjgjgjhgjh</h1>`;
        dugme.innerText = "Button";
  } else {
    div.innerHTML = "";
    dugme.innerText = "geri getir";
  }
  console.log("buton clicked");
});

    