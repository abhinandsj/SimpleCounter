let num = document.getElementById("num");

localStorage.setItem("count", num.innerHTML);
var x = Number(localStorage.getItem("count"));

const addbtn = document.getElementById("add");
const subbtn = document.getElementById("sub");

addbtn.addEventListener("click", function () {
     x = Number(localStorage.getItem("count"));
     x++;
     num.innerHTML = x;
     localStorage.setItem("count", x);
});

subbtn.addEventListener("click", function () {
     x = Number(localStorage.getItem("count"));
     x--;
     num.innerHTML = x;
     localStorage.setItem("count", x);
});
