window.onload = function () {
    khoiTao();
    
    list_feature = getListFeaters() || list_feature;
    addProductAlbum();
};

function getListFeaters(newList) {
    window.localStorage.setItem('ListFeaters', JSON.stringify(newList));
}

function getListFeaters() {
    return JSON.parse(window.localStorage.getItem('getListFeaters'));
}


function addProductAlbum() {
    var div = document.getElementsByClassName("home-category")[0];
    var s = `
        <div class="home-movie__wrap">
    `
    for(var i = 0; i <list_feature.length; i++) {
        var p = list_feature[i];
        s += `
        <div class="grid__column-2-4">
            <div class="home-movie__item">
                <a href="chiTietPhim.html" class="home-movie__item-img-wrap">
                    <img src="`+p.img+`" alt=""
                        class="home-movie__item-img">
                    </d>
                    <div class="home-movie__item-detail">
                        <a href="" class="home-movie-item__name">
                            `+p.name+`
                        </a>
                        <h4 class="home-movie-item__director">
                            `+p.director+`
                        </h4>
                        <div class="home-movie-item__rating">
                            <i class="home-movie-item__rating-icon fa-sharp fa-solid fa-star"></i>
                            <i class="home-movie-item__rating-icon fa-sharp fa-solid fa-star"></i>
                            <i class="home-movie-item__rating-icon fa-sharp fa-solid fa-star"></i>
                            <i class="home-movie-item__rating-icon fa-sharp fa-solid fa-star"></i>
                            <i class="home-movie-item__rating-icon fa-sharp fa-solid fa-star"></i>
                            <span class="home-movie-item__rating-label">5/5</span>
                        </div>
                        <div class="home-movie-item__button">
                            <button onclick="showSuccessToast();"
                                class="home-movie-item__btn-watch-later">
                                Xem sau
                            </button>
                            <div class="home-movie-item__btn-watch-wrap">
                                <a href="chiTietPhim.html" class="home-movie-item__btn-watch">
                                    Xem phim
                                </a>
                            </div>
                        </div>
                        <div class="home-movie-item__cast">
                            <h4 class="home-movie-item__cast-label">Cast</h4>
                            <ul class="home-movie-item__cast-list">
                                <li class="home-movie-item__cast-item"><img
                                        src="`+p.cast1+`"
                                        alt="" class="home-movie-item__cast-item-img"></li>
                                <li class="home-movie-item__cast-item"><img
                                        src="`+p.cast2+`"
                                        alt="" class="home-movie-item__cast-item-img"></li>
                                <li class="home-movie-item__cast-item"><img
                                        src="`+p.cast3+`"
                                        alt="" class="home-movie-item__cast-item-img"></li>
                                <li class="home-movie-item__cast-item"><img
                                        src="`+p.cast4+`"
                                        alt="" class="home-movie-item__cast-item-img"></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        `
    }
    s += `
    </div>
    `
    div.innerHTML = s;
}