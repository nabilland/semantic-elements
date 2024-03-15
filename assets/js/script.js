// 1. Dropdown konten planet
// Mengambil elemen dropdown dan elemen konten planet
var dropdown = document.getElementById('planet-dropdown');
var merkurius = document.getElementById('merkurius-info');
var venus = document.getElementById('venus-info');
var bumi = document.getElementById('bumi-info');
var mars = document.getElementById('mars-info');
var jupiter = document.getElementById('jupiter-info');
var saturnus = document.getElementById('saturnus-info');
var uranus = document.getElementById('uranus-info');
var neptunus = document.getElementById('neptunus-info');
var selectedPlanet;

// Menyembunyikan semua elemen konten planet terlebih dahulu
hidePlanetContents();

// Menambahkan event listener untuk perubahan pada dropdown
dropdown.addEventListener('change', function() {
    hidePlanetContents();

    selectedPlanet = dropdown.value;

    if (selectedPlanet === 'none'){
        hidePlanetContents();
    } else if (selectedPlanet === 'merkurius') {
        merkurius.style.display = 'block';
    } else if (selectedPlanet === 'venus') {
        venus.style.display = 'block';
    } else if (selectedPlanet === 'bumi') {
        bumi.style.display = 'block';
    } else if (selectedPlanet === 'mars') {
        mars.style.display = 'block';
    } else if (selectedPlanet === 'jupiter') {
        jupiter.style.display = 'block';
    } else if (selectedPlanet === 'saturnus') {
        saturnus.style.display = 'block';
    } else if (selectedPlanet === 'uranus') {
        uranus.style.display = 'block';
    } else if (selectedPlanet === 'neptunus') {
        neptunus.style.display = 'block';
    }
});

// Fungsi untuk menyembunyikan semua elemen konten planet
function hidePlanetContents() {
    merkurius.style.display = 'none';
    venus.style.display = 'none';
    bumi.style.display = 'none';
    mars.style.display = 'none';
    jupiter.style.display = 'none';
    saturnus.style.display = 'none';
    uranus.style.display = 'none';
    neptunus.style.display = 'none';
}

// 2. Membuat perubahan warna navbar ketika user melakukan scrolling
window.addEventListener('scroll', () => {
    var navbar = document.querySelector('.navbar');
    var links = navbar.querySelectorAll('.navbar-list');

    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'skyblue';
        navbar.style.borderColor = 'white';
        navbar.style.padding = '15px 5px';
        links.forEach(link => {
            link.style.color = 'black';
        });
    } else {
        navbar.style.backgroundColor = '#000b26';
        navbar.style.borderColor = 'transparent';
        links.forEach(link => {
            link.style.color = 'white';
        });
    }
});

// 3. Membuat dropdown untuk konten fenomena langit
var eventBtnDown = document.querySelectorAll('.event-btn-down i');
var eventBtnUp = document.querySelectorAll('.event-btn-up i');
var eventContent;

eventBtnDown.forEach((btnDown, index) => {
    btnDown.addEventListener('click', () => {
        btnDown.style.display = 'none';
        eventBtnUp[index].style.display = 'inline-block';
        eventContent = document.getElementById(`event-${index + 1}`);
        if (eventContent) {
        eventContent.style.display = 'block';
        }
    });
});

eventBtnUp.forEach((btnUp, index) => {
  btnUp.addEventListener('click', () => {
    btnUp.style.display = 'none';
    eventBtnDown[index].style.display = 'inline-block';
    eventContent = document.getElementById(`event-${index + 1}`);
    if (eventContent) {
      eventContent.style.display = 'none';
    }
  });
});