window.onload = function () {
    khoiTao();

    list_series = getListSeries() || list_series;
    list_feature = getListFeature() || list_feature;
    list_viet = getListViet() || list_viet;
    list_theaters = getListTheaters() || list_theaters;
    addProductTheaters();
    addProductViet();
    addProductFeater();
    addProductSeries();
};

function setListSeries(newList) {
    window.localStorage.setItem('ListSeries', JSON.stringify(newList));
}

function getListSeries() {
    return JSON.parse(window.localStorage.getItem('ListSeries'));
}
function setListFeature(newList) {
    window.localStorage.setItem('ListFeature', JSON.stringify(newList));
}

function getListFeature() {
    return JSON.parse(window.localStorage.getItem('ListFeature'));
}
function setListViet(newList) {
    window.localStorage.setItem('ListViet', JSON.stringify(newList));
}

function getListViet() {
    return JSON.parse(window.localStorage.getItem('ListViet'));
}
function setListTheaters(newList) {
    window.localStorage.setItem('ListTheaters', JSON.stringify(newList));
}

function getListTheaters() {
    return JSON.parse(window.localStorage.getItem('ListTheaters'));
}

function addProductTheaters() {
    var div = document.getElementsByClassName("home-movie")[0];
    var s = `
    <div class="home-movie__label">
        <div class="home-movie__label-main">
            <a href="chiTietCategory.html" class="home-movie__label-category">
                Phim Chiếu Rạp
            </a>
            <div class="home-movie__label-more">
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2019</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2020</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2021</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2022</a>
            </div>
        </div>
        <div class="home-movie__label-view-all">
            <a href="chiTietCategory.html" class="home-movie__label-view-all-link">
                Xem tất cả
                <i class="fa-sharp fa-solid fa-caret-right"></i>
            </a>
        </div>
    </div>
    <div class="home-movie__wrap">
    `
    for(var i = 0; i <list_theaters.length; i++) {
        var p = list_theaters[i];
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

function addProductViet() {
    var div = document.getElementsByClassName("home-movie")[1];
    var s = `
    <div class="home-movie__label">
        <div class="home-movie__label-main">
            <a href="chiTietCategory.html" class="home-movie__label-category">
                Phim Việt Nam
            </a>
            <div class="home-movie__label-more">
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2019</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2020</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2021</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2022</a>
            </div>
        </div>
        <div class="home-movie__label-view-all">
            <a href="chiTietCategory.html" class="home-movie__label-view-all-link">
                Xem tất cả
                <i class="fa-sharp fa-solid fa-caret-right"></i>
            </a>
        </div>
    </div>
    <div class="home-movie__wrap">
    `
    for(var i = 0; i <list_viet.length; i++) {
        var p = list_viet[i];
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

function addProductFeater() {
    var div = document.getElementsByClassName("home-movie")[2];
    var s = `
    <div class="home-movie__label">
        <div class="home-movie__label-main">
            <a href="chiTietCategory.html" class="home-movie__label-category">
                Phim Lẻ
            </a>
            <div class="home-movie__label-more">
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2019</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2020</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2021</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2022</a>
            </div>
        </div>
        <div class="home-movie__label-view-all">
            <a href="chiTietCategory.html" class="home-movie__label-view-all-link">
                Xem tất cả
                <i class="fa-sharp fa-solid fa-caret-right"></i>
            </a>
        </div>
    </div>
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

function addProductSeries() {
    var div = document.getElementsByClassName("home-movie")[3];
    var s = `
    <div class="home-movie__label">
        <div class="home-movie__label-main">
            <a href="chiTietCategory.html" class="home-movie__label-category">
                Phim Bộ
            </a>
            <div class="home-movie__label-more">
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2019</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2020</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2021</a>
                <a href="chiTietCategory.html" class="home-movie__label-more-link">2022</a>
            </div>
        </div>
        <div class="home-movie__label-view-all">
            <a href="chiTietCategory.html" class="home-movie__label-view-all-link">
                Xem tất cả
                <i class="fa-sharp fa-solid fa-caret-right"></i>
            </a>
        </div>
    </div>
    <div class="home-movie__wrap">
    `
    for(var i = 0; i <list_series.length; i++) {
        var p = list_series[i];
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