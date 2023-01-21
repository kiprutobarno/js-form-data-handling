const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");

var array = [...form];

array.forEach((input) => {
  submitBtn.addEventListener("click", getFormData);
});

function getFormData() {
  let data = new FormData(form);
  let obj = {};

  data.forEach((value, key) => {
    obj[key] = value;
  });

  var json = JSON.stringify(obj);
  console.log(obj);
}
