window.onload = function() {
  //What should we do when the page first loads?
};
const interests = ["Web Development", "Artificial Intelligence", "Gaming", "Photography"];
let nameInput = document.getElementById('name');
let submitButton = document.getElementById('submit-btn');
let interestsList = document.getElementById('interests-list');

function displayInterests() {
    for (let i = 0; i < interests.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = interests[i];
        interestsList.appendChild(listItem);
    }
}

submitButton.addEventListener('click', function() {
    const name = nameInput.value;
    if (name) {
        alert(`Thank you, ${name}! Your message has been submitted.`);
        nameInput.value = ''; // Reset input field
    } else {
        alert("Please enter your name.");
    }
});

displayInterests();
