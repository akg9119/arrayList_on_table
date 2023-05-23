var arrayName = ["aniket", "rohit", "suraj", "pratik", "rohan"];
var arrayPhone = [23325566, 95555855, 655898525, 52245858885, 558656555];
var arrayAddress = ["pandharpur", "pune", "solapur", "akluj", "mumbai"];
var arrayemail = ["aniket@gmail.com", "saurabh@gmail.com", "vivek@gmail.com", "rutu@gmail.com", "shital@gmail.com"];

function display() {
  var arrayBody = document.getElementById("array_body");
  arrayBody.innerHTML = "";

  for (var i = 0; i < arrayName.length; i++) {
    var row = document.createElement("tr");

    var indexCell = document.createElement("td");
    indexCell.textContent = i+1;
    row.appendChild(indexCell);

    var nameCell = document.createElement("td");
    nameCell.textContent = arrayName[i];
    row.appendChild(nameCell);

    var phoneCell = document.createElement("td");
    phoneCell.textContent = arrayPhone[i];
    row.appendChild(phoneCell);

    var addressCell = document.createElement("td");
    addressCell.textContent = arrayAddress[i];
    row.appendChild(addressCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = arrayemail[i];
    row.appendChild(emailCell);

    arrayBody.appendChild(row);
  }
}

display();
