

function hitung() {
  var n1 = parseInt(document.getElementById("alas").value);
  var n2 = parseInt(document.getElementById("tinggi").value);
  document.getElementById("hasil").value=n1+n2;
}

var alas = document.getElementById("alas");
var tinggi = document.getElementById("tinggi");
var hasil = document.getElementById("hasil");
document.getElementById("hitung").addEventListener("click", function() {
  hasil.value =
  parseInt(alas.value)+parseInt(tinggi.value);
});

const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const form = document.querySelector("form");
const error = document.getElementById("error");

form.addEventListener("hitung", (e) => {
  const errors = [];

  if(errors.length > 0) {
    e.preventDefault();
    error.toggleAttribute("hidden");
    error.innerHTML = errors.join(', ');
  }
}

function sumValues() 
{
  var alas, tinggi, hasil;
  alas=Number(document.concalc.alas.value)
  tinggi=Number(document.concalc.tinggi.value)
  hasil=num1+num2+num3
  document.concalc.hasil.value=re;
}
