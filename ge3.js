"use strict"
console.log("first")

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const gameSelect = document.getElementById("game");

populateUI();
let ticketPrice = +gameSelect.value;
console.log(typeof ticketPrice);

function setGameData(gameIndex, gamePrice) {
    localStorage.setItem("selectedGameIndex", gameIndex);
    localStorage.setItem("selectedGamePrice", gamePrice);
}

function updateSeletedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }
    const selectedGameIndex = localStorage.getItem("selectedGameIndex");

    if (selectedGameIndex != null) {
        gameSelect.selectedIndex = selectedGameIndex;
    }
}

gameSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setGameData(e.target.selectedIndex, e.target.value);
    updateSeletedCount();
})


container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
    }

    updateSeletedCount();
});

updateSeletedCount();








function CharacterSheet(name, role, job, imageUrl) {
    this.name = name;
    this.role = role;
    this.job = job;
    this.imageUrl = imageUrl;
    this.render();
}

CharacterSheet.prototype.render = function () {
    const containerElement = document.getElementById("characters");

    const article = document.createElement("article");
    containerElement.appendChild(article);

    const h3 = document.createElement("h3");
    h3.textContent = this.name;
    article.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = this.role;
    article.appendChild(p);

    const para = document.createElement("p");
    para.textContent = this.job;
    article.appendChild(para);

    const image = document.createElement("img");
    image.setAttribute("src", this.imageUrl);
    image.setAttribute("alt", `${this.name} profile shot.`);
    article.appendChild(image);

}

const ladyviolent = new CharacterSheet("Lady Violent", "Physical DPS", "Punch a dragon in the face.", "assets/monk.jpeg");

const bobertsonmire = new CharacterSheet("Bobertsonmire", "Ranged DPS", "Black Mage.", "assets/blackmage.jpg");

const tankgirl = new CharacterSheet("Tank Girl", "Tank", "Damage Sponge.", "assets/tank.jpg");

const cokezero = new CharacterSheet("Coke Zero", "Healer", "Rubs it better.", "assets/heals.jpg");
