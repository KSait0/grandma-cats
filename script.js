const main = document.querySelector("main");
const lightbox = document.querySelector(".lightbox");

function setRating(n) {
    let fill = `<img src="img/cat-fill.svg" alt="Закрашено">`;
    let stroke = `<img src="img/cat-stroke.svg" alt="Не закрашено">`;
    let rate = "";
    let count = 10;
    for (let i = 0; i < count; i++) {
        rate += i < n ? fill : stroke;
    }
    return rate;
}


function getData(data) {
    const item = `
        <div class="card">
            <div class="card-img" style="background-image: url(${data.img_link})"></div>
            <h3>${data.name}</h3>
            <p class="rate">${setRating(data.rate)}</p>
        </div>
    `;
    main.innerHTML += item;
}

cats.forEach(function (cat) {
        getData(cat);
    });

function ageWord(n, a1, a2, a3) {
    if (n === 1) {
        return a1;
    } else if (n >= 2 && n <= 4) {
        return a2;
    } else {
        return a3;
    }
}

function openLightbox(data) {
    lightbox.classList.add("active");
    lightbox.firstElementChild.innerHTML = `
            <img class="lightbox-img" src="${data.img_link}" alt="${data.name}">
            <div class="info">
                <h2>${data.name}</h2>
                <h3>${data.age} ${ageWord(data.age, "год", "года", "лет")}</h3>
                <p>${data.description}</p>
            </div>
            <div class="lightbox-close" onclick="closeLightbox()"></div>
        `;
}

function closeLightbox() {
    lightbox.classList.remove("active");
}

const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function (e) {
            openLightbox(cats[i]);
        })
}