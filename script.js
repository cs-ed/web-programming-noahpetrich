const interests = ["Coding", "Gaming", "Technology", "Art", "Learning new skills"];
let userName = "";

function displayInterests() {
  const list = document.getElementById("interests-list");

  for (let interest of interests) {
    let item = document.createElement("li");
    item.textContent = interest;
    list.appendChild(item);
  }
}

function submitName() {
  userName = document.getElementById("name").value;
  const message = document.getElementById("message");

  if (userName === "") {
    message.textContent = "Please enter your name.";
  } else {
    message.textContent = "Thanks for visiting my portfolio, " + userName + "!";
  }
}

document.getElementById("submit-btn").addEventListener("click", submitName);

displayInterests();
