var music10 = document.getElementById("music10");
var music11 = document.getElementById("music11");
var music12 = document.getElementById("music12");
var music13 = document.getElementById("music13");
var music14 = document.getElementById("music14");

var musicContainer10 = document.getElementById("musicContainer10");
var musicContainer11 = document.getElementById("musicContainer11");
var musicContainer12 = document.getElementById("musicContainer12");
var musicContainer13 = document.getElementById("musicContainer13");
var musicContainer14 = document.getElementById("musicContainer14");

function playMusic(music) {
    music.play();
}

function pauseMusic(music) {
    music.pause();
}

musicContainer10.addEventListener("mouseover", function() {
    playMusic(music10);
});

musicContainer10.addEventListener("mouseout", function() {
    pauseMusic(music10);
});

musicContainer11.addEventListener("mouseover", function() {
    playMusic(music11);
});

musicContainer11.addEventListener("mouseout", function() {
    pauseMusic(music11);
});

musicContainer12.addEventListener("mouseover", function() {
    playMusic(music12);
});

musicContainer12.addEventListener("mouseout", function() {
    pauseMusic(music12);
});

musicContainer13.addEventListener("mouseover", function() {
    playMusic(music13);
});

musicContainer13.addEventListener("mouseout", function() {
    pauseMusic(music13);
});

musicContainer14.addEventListener("mouseover", function() {
    playMusic(music14);
});

musicContainer14.addEventListener("mouseout", function() {
    pauseMusic(music14);
});
