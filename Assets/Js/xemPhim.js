window.onload = function () {
    khoiTao();
    loadingMovie();
    addServer();
    addEpisode();
};

function loadingMovie() {
    var playBtn = document.querySelector(".home-watch-movie__icon-play");
    var btnLoader = document.querySelector(".home-watch-movie__icon-loader");
    var backImage = document.querySelector(".home-watch-movie__back");
    playBtn.onclick = function() {
        this.innerHTML = "<div class='home-watch-movie__icon-loader'></div>";
        this.style.display = "none"
        btnLoader.style.display = "block";
        backImage.style.backgroundImage = "none";
    }
}

function addServer() {
    var server = document.querySelectorAll(".home-watch-movie__server-item");

    server.forEach(e => {
        e.addEventListener("click", function() {
            server.forEach(server=>server.classList.remove("home-watch-movie__server-active"))

            this.classList.add("home-watch-movie__server-active")
        })
    })
}

function addEpisode() {
    var episode = document.querySelectorAll(".home-watch-movie__episode-item");

    episode.forEach(e => {
        e.addEventListener("click", function() {
            episode.forEach(episode=>episode.classList.remove("home-watch-movie__episode-active"))

            this.classList.add("home-watch-movie__episode-active")
        })
    })
}