const evenNumbersList = document.getElementById("even-numbers-list");
function getEvenNumbers() {
  let html = "<ul>";
  for (let i = 10; i <= 200; i += 2) {
    html += "<li>" + i + "</li>";
  }
  html += "</ul>";
  evenNumbersList.innerHTML = html;
}
let userInfo = {
  name: "daniel",
  age: 23,
  email: "d@notmyrealmail.com",
  phone: "058666666⯰",
  address: {
    city: "tlv",
    street: "not found",
    number: 666,
  },
};
const EL_objectList = document.getElementById("object-list");
function runObject() {
  EL_objectList.innerHTML = "<ul class='list'>";
  let list = document.querySelector(".list");
  for (let key in userInfo) {
    let value = userInfo[key];
    if (typeof value === "object") {
      list.innerHTML += `<li>${key}:</li>`;
      list.lastChild.innerHTML += "<ul class='innerList'>";
      let innerList = document.querySelector(".innerList");
      for (let iKey in value) {
        innerList.innerHTML += `
        <li>${key}.${iKey} ==> ${value[iKey]}</li>
        `;
      }
      list.lastChild.innerHTML += "</ul>";
    } else {
      list.innerHTML += `<li>${key}==>${value}</li>`;
    }
  }
  EL_objectList.innerHTML += "</ul>";
}
runObject();
