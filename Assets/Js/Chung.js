function khoiTao() {
    setupEventAccount();
    fadeOut();
    showMenu();
}


function setupEventAccount() {
    var taikhoan = document.getElementsByClassName('taikhoan')[0];
    var list = taikhoan.getElementsByTagName('input');

    ['blur', 'focus'].forEach(function (evt) {
        for (var i = 0; i < list.length; i++) {
            list[i].addEventListener(evt, function (e) {
                var label = this.previousElementSibling;
                if (e.type === 'blur') {
                    if (this.value === '') {
                        label.classList.remove('active');
                        label.classList.remove('highlight');
                    } else {
                        label.classList.remove('highlight');
                    }
                } else if (e.type === 'focus') {
                    label.classList.add('active');
                    label.classList.add('highlight');
                }
            });
        }
    })

    var tab = document.getElementsByClassName('tab');
    for (var i = 0; i < tab.length; i++) {
        var a = tab[i].getElementsByTagName('a')[0];
        a.addEventListener('click', function (e) {
            e.preventDefault();

            this.parentElement.classList.add('active');


            if (this.parentElement.nextElementSibling) {
                this.parentElement.nextElementSibling.classList.remove('active');
            }
            if (this.parentElement.previousElementSibling) {
                this.parentElement.previousElementSibling.classList.remove('active');
            }

            var target = this.href.split('#')[1];
            document.getElementById(target).style.display = 'block';

            var hide = (target == 'login' ? 'signup' : 'login');
            document.getElementById(hide).style.display = 'none';
        })
    }
}

function showAccount(show) {
    var value = (show ? "scale(1)" : "scale(0)");
    var div = document.getElementsByClassName('containTaikhoan')[0];
    div.style.transform = value;
}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 1300);
}

function showMenu() {
    let menu = document.querySelector(".header-category__list");
    let menuBtn = document.querySelector(".header-category__position-link");
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
}

function gotoTop() {
    if (window.jQuery) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    } else {
        document.getElementsByClassName('header__navbar')[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

function addContainTaiKhoan() {
    document.write(`
	<div class="containTaikhoan">
        <span class="close" onclick="showAccount(false);">&times;</span>
        <div class="taikhoan">

            

            <div class="tab-content">
                <div id="login">
                    <h1>????ng Nh???p</h1>

                    <form onsubmit="return logIn(this);">

                        <div class="field-wrap">
                            <label>
                                T??n ????ng nh???p<span class="req">*</span>
                            </label>
                            <input name='username' type="text" required autocomplete="off" />
                        </div>

                        <div class="field-wrap">
                            <label>
                                M???t kh???u<span class="req">*</span>
                            </label>
                            <input name="pass" type="password" required autocomplete="off" />
                        </div> <!-- pass -->

                        <button type="submit" class="button button-block" />????ng Nh???p</button>

                    </form>

                </div>

                <div id="signup">
                    <h1>????ng k?? mi???n ph??</h1>

                    <form onsubmit="return signUp(this);">

                        <div class="top-row">
                            <div class="field-wrap">
                                <label>
                                    H???<span class="req">*</span>
                                </label>
                                <input name="ho" type="text" required autocomplete="off" />
                            </div>

                            <div class="field-wrap">
                                <label>
                                    T??n<span class="req">*</span>
                                </label>
                                <input name="ten" type="text" required autocomplete="off" />
                            </div>
                        </div> <!-- / ho ten -->

                        <div class="field-wrap">
                            <label>
                                ?????a ch??? Email<span class="req">*</span>
                            </label>
                            <input name="email" type="email" required autocomplete="off" />
                        </div> <!-- /email -->

                        <div class="field-wrap">
                            <label>
                                T??n ????ng nh???p<span class="req">*</span>
                            </label>
                            <input name="newUser" type="text" required autocomplete="off" />
                        </div> <!-- /user name -->

                        <div class="field-wrap">
                            <label>
                                M???t kh???u<span class="req">*</span>
                            </label>
                            <input name="newPass" type="password" required autocomplete="off" />
                        </div>

                        <button type="submit" class="button button-block" />T???o t??i kho???n</button>

                    </form>

                </div>
            </div>
            <ul class="tab-group">
                <li class="tab active"><a href="#login">????ng nh???p</a></li>
                <li class="tab"><a href="#signup">????ng k??</a></li>
            </ul>

        </div>
    </div>`);
}

function addHeader() {
    document.write(`
    <div class="grid">
                <nav class="header__navbar">
                    <div class="header-navbar__logo">
                        <a href="index.html" class="header-navbar__logo-link"><img src="./Assets/Image/logo.png"
                                alt="" class="header-navbar__logo-img"></a>
                    </div>
                    <div class="header__search">
                        <div class="header__search-input-wrap">
                            <input type="text" class="header__search-input" placeholder="Nh???p t??n phim, di???n vi??n,....">
                            <!-- Search History -->
                            <div class="header__search-history">
                                <h3 class="header__search-history-heading">L???ch s??? t??m ki???m</h3>
                                <ul class="header__search-history-list">
                                    <li class="header__search-history-item">
                                        <a href="">M??a h?? y??u d???u c???a ch??ng ta</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="">Y??u nh???m b???n th??n</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="">V?????n sao b??ng</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button class="header__search-btn">
                            <i class="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div class="header-navbar__account">
                        <a class="header-navbar__account-link" onclick="showAccount(true)">T??i kho???n</a>
                    </div>
                    <div class="header-navbar__watch-later">
                        <div class="header-navbar__watch-later-wrap">
                            <i class="header-navbar__watch-later-icon fa-regular fa-clock"></i>
                            <h3 class="header-navbar__watch-later-text">
                                Xem sau
                            </h3>
                            <div class="header-navbar__watch-list">
                                <ul class="header-navbar__watch-list-item">
                                    <li class="header-navbar__watch-item">
                                        <a href="#" class="header-navbar__watch-link-img">
                                            <img src="./Assets/Image/Film/minh-nhat/big.jpg"
                                                alt="" class="header-navbar__watch-img">
                                        </a>
                                        <a href="#" class="header-navbar__watch-link">Minh nh???t chi???n k??</a>
                                    </li>
                                    <li class="header-navbar__watch-item">
                                        <a href="#" class="header-navbar__watch-link-img">
                                            <img src="./Assets/Image/Film/mua-he-yeu-dau-cua-chung-ta/mua-he-yeu-dau2.jpg"
                                                alt="" class="header-navbar__watch-img">
                                        </a>
                                        <a href="#" class="header-navbar__watch-link">M??a h?? y??u d???u c???a ch??ng ta</a>
                                    </li>
                                    <li class="header-navbar__watch-item">
                                        <a href="#" class="header-navbar__watch-link-img">
                                            <img src="./Assets/Image/Film/chuyen-than-tien/big.jpg"
                                                alt="" class="header-navbar__watch-img">
                                        </a>
                                        <a href="#" class="header-navbar__watch-link">Chuy???n Th???n Ti??n ??? New York 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="header-category">
                <div class="grid">
                    <ul class="header-category__position-list">
                        <li class="header-category__position-item header-category__position-item-separate">
                            <span class="header-category__position-link">
                                <i class="fa-solid fa-bars"></i>
                                Menu
                            </span>
                        </li>
                        <li class="header-category__position-item header-category__position-item-separate">
                            <a href="chiTietCategory.html" class="header-category__position-link">
                                <i class="fa-solid fa-film"></i>
                                Phim b???
                            </a>
                        </li>
                        <li class="header-category__position-item header-category__position-item-separate">
                            <a href="chiTietCategory.html" class="header-category__position-link">
                                <i class="fa-solid fa-clapperboard"></i>
                                Phim l???
                            </a>
                        </li>
                        <li class="header-category__position-item header-category__position-item-separate">
                            <a href="chiTietCategory.html" class="header-category__position-link">
                                <i class="fa-solid fa-photo-film"></i>
                                Phim chi???u r???p
                            </a>
                        </li>
                        <li class="header-category__position-item">
                            <a class="header-category__position-link" onclick="showAccount(true)">
                                <i class="fa-solid fa-right-to-bracket"></i>
                                T??i kho???n
                            </a>
                        </li>
                    </ul>
                    <ul class="header-category__list">
                        <li class="header-category__list-item">
                            <a href="index.html" class="header-category__list-item-link">
                                <i class="header-category__list-item-icon fa-sharp fa-solid fa-house"></i>
                            </a>
                        </li>
                        <li class="header-category__list-item">
                            <a href="chiTietCategory.html" class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Phim Chi???u R???p
                                </span>
                            </a>
                        </li>
                        <li class="header-category__list-item">
                            <a href="chiTietCategory.html" class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Phim Vi???t Nam
                                </span>
                            </a>
                        </li>
                        <li class="header-category__list-item">
                            <a href="chiTietAlbum.html" class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Album
                                </span>
                            </a>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Phim l???
                                </span>
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? H??n Qu???c</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? Trung Qu???c</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? ????i Loan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? H???ng K??ng</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? M???</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? Ch??u ??u</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? Vi???t Nam</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? Th??i Lan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim l??? Nh???t B???n</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Phim B???
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? H??n Qu???c</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? Trung Qu???c</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? ????i Loan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? H???ng K??ng</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? M???</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? Ch??u ??u</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? Vi???t Nam</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? Th??i Lan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim b??? Nh???t B???n</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Th??? Lo???i
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">H??nh ?????ng</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">T??nh C???m</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">H??i H?????c</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">H??nh S???</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phi??u L??u</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Gia ????nh</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Th??? Thao</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">L???ch s???</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Vi???n T?????ng</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Qu???c Gia
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">H??n Qu???c</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Trung Qu???c</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">????i Loan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">H???ng K??ng</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">M???</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Ch??u ??u</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Vi???t Nam</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Th??i Lan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Nh???t B???n</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    N??m
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2019</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2020</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2021</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2022</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2017</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2018</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2016</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2015</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">N??m 2014</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a href="chiTietLichChieu.html" class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    L???ch Chi???u
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    `)
}

function addFooter() {
    document.write(
        `
        <div class="grid">
        <div class="footer-one">
        <div class="footer-one__movie-new">
            <h5 class="footer-one__movie-new__label">
                Phim M???i
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim chi???u r???p</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim l???</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim b???</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim h??nh ?????ng</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim vi???n t?????ng</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim t??m l??</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim h??i h?????c</a></li>
            </ul>
        </div>
        <div class="footer-one__movie-new">
            <h5 class="footer-one__movie-new__label">
                Phim Hay
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim M???</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim H??n Qu???c</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Trung Qu???c</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Th??i Lan</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Vi???t Nam</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Ma Kinh D???</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Ho???t H??nh</a></li>
            </ul>
        </div>
        <div class="footer-one__movie-new">
            <h5 class="footer-one__movie-new__label">
                Phim Hot
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phimmoi</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Sitemap</a></li>
            </ul>
        </div>
        <div class="footer-one__movie-new">
            <h5 class="footer-one__movie-new__label">
                Tr??? gi??p
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">H???i ????p</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Li??n h???</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Tin t???c</a></li>
            </ul>
        </div>
        <div class="footer-one__movie-new">
            <h5 class="footer-one__movie-new__label">
                Th??ng tin
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">??i???u kho???n s??? d???ng</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Ch??nh s??ch ri??ng t??</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Khi???u n???i b???n quy???n</a></li>
            </ul>
        </div>
    </div>
        </div>
        <div class="footer-two">
        <div class="footer-two__logo">
            <a href="" class="footer-two__logo-link">
                <img src="./Assets/Image/logo.png" alt="" class="footer-two__logo-img">
            </a>
        </div>
        <div class="footer-two__content">
            <p class="footer-two__copyright">
                Copyright ?? 2022 BestMovie ver 1.0 All Rights Reserved.
            </p>
        </div>
    </div>
        `
    );
}

function addLoader() {
    document.write(`
    <div class="loader-container">
        <img src="https://acegif.com/wp-content/uploads/loading-1.gif" alt="">
    </div>
    `)
}

function addProductSlider() {
    document.write(`
    <ul id="autoWidth" class="cs-hidden">
                            <li class="item-a">
                                <div class="home-movie__item">
                                    <a href="" class="home-movie__item-img-wrap">
                                        <img src="./Assets/Image/Film/minh-nhat/img.jpg"
                                            alt="" class="home-movie__item-img">
                                        </d>
                                        <div class="home-movie__item-detail">
                                            <a href="" class="home-movie-item__name">
                                                Minh nh???t chi???n k??
                                            </a>
                                            <h4 class="home-movie-item__director">
                                                Ng Yuen-fai
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
                                                            src="./Assets/Image/Film/minh-nhat/5Va4jk69gkdAcABtkTtcUz85RLA.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/minh-nhat/tDFQK5iHlNrLyrORJdJiDcf0zMg.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/minh-nhat/yQuDBTzm7xWlJICNvl20OmcJP80.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/minh-nhat/yzEx86TPAFCqeLd3uEbX5i3vTXP.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="item-a">
                                <div class="home-movie__item">
                                    <a href="" class="home-movie__item-img-wrap">
                                        <img src="./Assets/Image/Film/nguoc-dong/poster.jpg"
                                            alt="" class="home-movie__item-img">
                                        </d>
                                        <div class="home-movie__item-detail">
                                            <a href="" class="home-movie-item__name">
                                                Ng?????c d??ng th???i gian ????? y??u anh
                                            </a>
                                            <h4 class="home-movie-item__director">
                                                James Cameron
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
                                                            src="./Assets/Image/Film/mua-he-yeu-dau-cua-chung-ta/kim-da-mi.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/mua-he-yeu-dau-cua-chung-ta/choi.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/mua-he-yeu-dau-cua-chung-ta/jeon-hye-won.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/mua-he-yeu-dau-cua-chung-ta/kim-sung-cheol.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="item-a">
                                <div class="home-movie__item">
                                    <a href="" class="home-movie__item-img-wrap">
                                        <img src="./Assets/Image/Film/Moi-quy/moi-quy.jpg"
                                            alt="" class="home-movie__item-img">
                                        </d>
                                        <div class="home-movie__item-detail">
                                            <a href="" class="home-movie-item__name">
                                                M???i qu??? d???
                                            </a>
                                            <h4 class="home-movie-item__director">
                                                Daniel Stamm
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
                                                            src="./Assets/Image/Film/Moi-quy/3GbOZdjoSVE2dkti9MKx44HidRi.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Moi-quy/bGT39QpwMEbEoeBCPoVJYsfauvj.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Moi-quy/mLlAU6Zl2MIL5znp5UHdX3sVTN7.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Moi-quy/vgj4zlU5sqJ1EzRgUP3ikRwK4lW.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="item-a">
                                <div class="home-movie__item">
                                    <a href="" class="home-movie__item-img-wrap">
                                        <img src="./Assets/Image/Film/chuyen-than-tien/poster.jpg"
                                            alt="" class="home-movie__item-img">
                                        </d>
                                        <div class="home-movie__item-detail">
                                            <a href="" class="home-movie-item__name">
                                                Chuy???n Th???n Ti??n ??? New York 2
                                            </a>
                                            <h4 class="home-movie-item__director">
                                                Adam Shankman
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
                                                            src="./Assets/Image/Film/chuyen-than-tien/9QTtEfAmQOQcGhD12zzxdouLRh4.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/chuyen-than-tien/bp7PLjL2fHVuLRFsw6ccpGrGjrA.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/chuyen-than-tien/ldN8kXKaTv43E41PaYmBFj1QQQf.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/chuyen-than-tien/oukjBHYzFzmaJ7g6aWXJbt3evFs.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="item-a">
                                <div class="home-movie__item">
                                    <a href="" class="home-movie__item-img-wrap">
                                        <img src="./Assets/Image/Film/Yeu-quai-toan-thu/poster.jpg"
                                            alt="" class="home-movie__item-img">
                                        </d>
                                        <div class="home-movie__item-detail">
                                            <a href="" class="home-movie-item__name">
                                                Y??u qu??i to??n th??
                                            </a>
                                            <h4 class="home-movie-item__director">
                                                Takashi Yamazaki
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
                                                            src="./Assets/Image/Film/Yeu-quai-toan-thu/6MwcfIUraHuKOmwjT4gX8BBB2T6.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Yeu-quai-toan-thu/asekPbtKNWY4hptwL027Xi9xZY1.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Yeu-quai-toan-thu/i5CaaqKmHH0vKCloqZyrCwn5mWy.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Yeu-quai-toan-thu/vhjyfNcXOy6MGgFZmSwM7Ou1FSL.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="item-a">
                                <div class="home-movie__item">
                                    <a href="" class="home-movie__item-img-wrap">
                                        <img src="./Assets/Image/Film/Avartar2/poster.jpg"
                                            alt="" class="home-movie__item-img">
                                        </d>
                                        <div class="home-movie__item-detail">
                                            <a href="" class="home-movie-item__name">
                                                Avatar 2: D??ng Ch???y C???a N?????c
                                            </a>
                                            <h4 class="home-movie-item__director">
                                                James Cameron
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
                                                            src="./Assets/Image/Film/Avartar2/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Avartar2/e3tdop3WhseRnn8KwMVLAV25Ybv.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Avartar2/flfhep27iBxseZIlxOMHt6zJFX1.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                    <li class="home-movie-item__cast-item"><img
                                                            src="./Assets/Image/Film/Avartar2/iOVbUH20il632nj2v01NCtYYeSg.jpg"
                                                            alt="" class="home-movie-item__cast-item-img"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
    `)
}

function addCharts() {
    document.write(`
    <div class="home-charts">
        <div class="home-charts__label">
            <h3 class="home-charts__label-title">
                B???ng x???p h???ng
            </h3>
        </div>
        <div class="home-charts__movie">
            <ul class="home-charts__movie-list">
                <li class="home-charts__movie-item">
                    <a href="#" class="home-charts__movie-link">
                        <span class="home-charts__movie-ordinal">
                            1
                        </span>
                        <img src="./Assets/Image/Film/Avartar2/poster.jpg" alt="" class="home-charts__movie-img">
                        <div class="home-charts__movie-content">
                            <h6 href="#" class="home-charts__movie-name">
                                Avartar2
                            </h6>
                            <p class="home-charts__movie-episode">
                                T???p 36
                            </p>
                        </div>
                    </a>
                </li>
                <li class="home-charts__movie-item">
                    <a href="#" class="home-charts__movie-link">
                        <span class="home-charts__movie-ordinal">
                            2
                        </span>
                        <img src="./Assets/Image/Film/ca-sau-biet-hat/poster.jpg" alt="" class="home-charts__movie-img">
                        <div class="home-charts__movie-content">
                            <h6 href="#" class="home-charts__movie-name">
                                Lyle ch?? c?? s???u bi???t h??t
                            </h6>
                            <p class="home-charts__movie-episode">
                                T???p 36
                            </p>
                        </div>
                    </a>
                </li>
                <li class="home-charts__movie-item">
                    <a href="#" class="home-charts__movie-link">
                        <span class="home-charts__movie-ordinal">
                            3
                        </span>
                        <img src="./Assets/Image/Film/chien-binh-bao-den/poster.jpg" alt="" class="home-charts__movie-img">
                        <div class="home-charts__movie-content">
                            <h6 href="#" class="home-charts__movie-name">
                                Chi???n binh b??o ??en
                            </h6>
                            <p class="home-charts__movie-episode">
                                T???p 36
                            </p>
                        </div>
                    </a>
                </li>
                <li class="home-charts__movie-item">
                    <a href="#" class="home-charts__movie-link">
                        <span class="home-charts__movie-ordinal">
                            4
                        </span>
                        <img src="./Assets/Image/Film/chuyen-than-tien/poster.jpg" alt="" class="home-charts__movie-img">
                        <div class="home-charts__movie-content">
                            <h6 href="#" class="home-charts__movie-name">
                                Chuy???n th???n ti??n ??? New York 2
                            </h6>
                            <p class="home-charts__movie-episode">
                                T???p 36
                            </p>
                        </div>
                    </a>
                </li>
                <li class="home-charts__movie-item">
                    <a href="#" class="home-charts__movie-link">
                        <span class="home-charts__movie-ordinal">
                            5
                        </span>
                        <img src="./Assets/Image/Film/cuoc-chien-xuyen-khong/poster.jpg" alt="" class="home-charts__movie-img">
                        <div class="home-charts__movie-content">
                            <h6 href="#" class="home-charts__movie-name">
                                Cu???c chi???n xuy??n kh??ng
                            </h6>
                            <p class="home-charts__movie-episode">
                                T???p 36
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="home-trailer__wrap">
        <div class="home-trailer">
            <div class="home-trailer__label">
                <h3 class="home-trailer__label-title">
                    Phim s???p chi???u
                </h3>
            </div>
            <div class="home-trailer__movie">
                <ul class="home-trailer__movie-list">
                    <li class="home-trailer__movie-item">
                        <a href="#" class="home-charts__movie-link">
                            <img src="./Assets/Image/Film/Avartar2/poster.jpg" alt="" class="home-charts__movie-img">
                            <div class="home-charts__movie-content">
                                <h6 href="#" class="home-charts__movie-name">
                                    Avartar2
                                </h6>
                                <p class="home-charts__movie-episode">
                                    Trailer
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="home-trailer__movie-item">
                        <a href="#" class="home-charts__movie-link">
                            <img src="./Assets/Image/Film/ca-sau-biet-hat/poster.jpg" alt="" class="home-charts__movie-img">
                            <div class="home-charts__movie-content">
                                <h6 href="#" class="home-charts__movie-name">
                                    Lyle ch?? c?? s???u bi???t h??t
                                </h6>
                                <p class="home-charts__movie-episode">
                                    Trailer
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="home-trailer__movie-item">
                        <a href="#" class="home-charts__movie-link">
                            <img src="./Assets/Image/Film/chien-binh-bao-den/poster.jpg" alt="" class="home-charts__movie-img">
                            <div class="home-charts__movie-content">
                                <h6 href="#" class="home-charts__movie-name">
                                    Chi???n binh b??o ??en
                                </h6>
                                <p class="home-charts__movie-episode">
                                    Trailer
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="home-trailer__movie-item">
                        <a href="#" class="home-charts__movie-link">
                            <img src="./Assets/Image/Film/chuyen-than-tien/poster.jpg" alt="" class="home-charts__movie-img">
                            <div class="home-charts__movie-content">
                                <h6 href="#" class="home-charts__movie-name">
                                    Chuy???n th???n ti??n ??? New York 2
                                </h6>
                                <p class="home-charts__movie-episode">
                                    Trailer
                                </p>
                            </div>
                        </a>
                    </li>
                    <li class="home-trailer__movie-item">
                        <a href="#" class="home-charts__movie-link">
                            <img src="./Assets/Image/Film/cuoc-chien-xuyen-khong/poster.jpg" alt="" class="home-charts__movie-img">
                            <div class="home-charts__movie-content">
                                <h6 href="#" class="home-charts__movie-name">
                                    Cu???c chi???n xuy??n kh??ng
                                </h6>
                                <p class="home-charts__movie-episode">
                                    Trailer
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `)
}