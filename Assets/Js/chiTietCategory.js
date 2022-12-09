window.onload = function () {
    khoiTao();

    list_popular = getListPopulars() || list_popular;
    addProductTheaters()
};

function setListPopulars(newList) {
    window.localStorage.setItem('ListPopulars', JSON.stringify(newList));
}

function getListPopulars() {
    return JSON.parse(window.localStorage.getItem('ListPopulars'));
}

function addProductTheaters() {
    var div = document.getElementsByClassName("home-category")[0];
    var s = `
    <div class="home-movie__label">
        <div class="home-movie__label-main">
            <h3 class="home-movie__label-category">
                Phim Chiếu Rạp Mới Cập Nhật
            </h3>
        </div>
    </div>
    <div class="home-category__filter">
        <select name="Sắp xếp" id="sapxep" class="filter-select">
            <option value="">Sắp xếp</option>
            <option value="moicapnhat">Mới cập nhật</option>
            <option value="namxuatban">Năm xuất bản</option>
            <option value="moicapnhat">Tên phim</option>
        </select>
        <select name="Loại" id="loai" class="filter-select">
            <option value="">Loại</option>
            <option value="phimle">Phim lẻ</option>
            <option value="phimbo">Phim bộ</option>
        </select>
        <select name="Thể Loại" id="theloai" class="filter-select">
            <option value="">Thể loại</option>
            <option value="amnhac">Âm nhạc</option>
            <option value="bian">Bí ẩn</option>
            <option value="chientranh">Chiến tranh</option>
            <option value="tinhcam">Tâm lý - tình cảm</option>
            <option value="haihuoc">Hài hước</option>
            <option value="kinhdi">Kinh Dị</option>
            <option value="vientuong">Viễn Tưởng</option>
        </select>
        <select name="Quốc Gia" id="quocgia" class="filter-select">
            <option value="">Quốc gia</option>
            <option value="my">Mỹ</option>
            <option value="anh">Anh</option>
            <option value="chauau">Châu Âu</option>
            <option value="hongkong">Hồng Kông</option>
            <option value="nhatban">Nhật Bản</option>
            <option value="trungquoc">Trung Quốc</option>
        </select>
        <select name="Năm" id="nam" class="filter-select">
            <option value="">Năm</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
        </select>
        <input type="submit" value="Lọc Phim" class="filter-btn">
    </div>
    <div class="home-movie__wrap">
    `
    for(var i = 0; i <list_popular.length; i++) {
        var p = list_popular[i];
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
    <ul class="pagination home-product__pagination">
        <li class="pagination-item">
            <a href="" class="pagination-item__link">
                <i class="pagination-item__icon fa-solid fa-angle-left"></i>
            </a>
        </li>
        <li class="pagination-item pagination-item--active">
            <a href="" class="pagination-item__link">1</a>                                </a>
        </li>
        <li class="pagination-item">
            <a href="" class="pagination-item__link">2</a>                                </a>
        </li>
        <li class="pagination-item">
            <a href="" class="pagination-item__link">3</a>                                </a>
        </li>
        <li class="pagination-item">
            <a href="" class="pagination-item__link">4</a>                                </a>
        </li>
        <li class="pagination-item">
            <a href="" class="pagination-item__link">5</a>                                </a>
        </li>
        <li class="pagination-item">
            <a href="" class="pagination-item__link">...</a>                                </a>
        </li>
        <li class="pagination-item">
            <a href="" class="pagination-item__link">14</a>                                </a>
        </li>
        <li class="pagination-item">
            <a href="" class="pagination-item__link">
                <i class="pagination-item__icon fa-solid fa-angle-right"></i>
            </a>
        </li>
    </ul>
    `
    div.innerHTML = s;
}