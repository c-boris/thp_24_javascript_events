// Fonctionnalité 1

let footer = document.querySelector("footer");
let count = 0;
footer.addEventListener("click", function () {
    count++
    console.log("clique numéro " + count);
});

// Fonctionnalité 2

let navbarHeader = document.querySelector("#navbarHeader");
let navbarToggler = document.querySelector(".navbar-toggler")
navbarToggler.addEventListener("click", function () {
  navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité 3

let card1 = document.querySelector(".card");
let editBtn = document.querySelector(".card .btn-outline-secondary");
editBtn.addEventListener("click", function () {
    card1.style.color = "red";
});

// Fonctionnalité 4

let card2 = document.querySelectorAll(".card")[1];
let editBtn2 = document.querySelectorAll(".card .btn-outline-secondary")[1];
editBtn2.addEventListener("click", function () {
    if (card2.style.color === 'green') {
        card2.style.color = '';
    } else {
        card2.style.color = 'green';
    }
});

// Fonctionnalité 5

let nav = document.querySelector(".navbar");
nav.addEventListener("dblclick", function () {
    if (document.querySelector('link').disabled === true) {
        document.querySelector('link').disabled = false;
    }
    else {
        document.querySelector('link').disabled = true;
    }
});

// Fonctionnalité 6

// Fonctionnalité 7

let btnRowRight = document.querySelector(".jumbotron .btn-secondary");

btnRowRight.addEventListener("click", function () {
    document.querySelector(".album .row").prepend(document.querySelectorAll(".col-md-4")[5]);
});

// Fonctionnalité 8

let btnRowLeft = document.querySelector(".jumbotron .btn-primary");

btnRowLeft.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".album .row").append(document.querySelectorAll(".col-md-4")[0]);
})

// Fonctionnalité 9