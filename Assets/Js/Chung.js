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
                    <h1>Đăng Nhập</h1>

                    <form onsubmit="return logIn(this);">

                        <div class="field-wrap">
                            <label>
                                Tên đăng nhập<span class="req">*</span>
                            </label>
                            <input name='username' type="text" required autocomplete="off" />
                        </div>

                        <div class="field-wrap">
                            <label>
                                Mật khẩu<span class="req">*</span>
                            </label>
                            <input name="pass" type="password" required autocomplete="off" />
                        </div> <!-- pass -->

                        <button type="submit" class="button button-block" />Đăng Nhập</button>

                    </form>

                </div>

                <div id="signup">
                    <h1>Đăng kí miễn phí</h1>

                    <form onsubmit="return signUp(this);">

                        <div class="top-row">
                            <div class="field-wrap">
                                <label>
                                    Họ<span class="req">*</span>
                                </label>
                                <input name="ho" type="text" required autocomplete="off" />
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Tên<span class="req">*</span>
                                </label>
                                <input name="ten" type="text" required autocomplete="off" />
                            </div>
                        </div> <!-- / ho ten -->

                        <div class="field-wrap">
                            <label>
                                Địa chỉ Email<span class="req">*</span>
                            </label>
                            <input name="email" type="email" required autocomplete="off" />
                        </div> <!-- /email -->

                        <div class="field-wrap">
                            <label>
                                Tên đăng nhập<span class="req">*</span>
                            </label>
                            <input name="newUser" type="text" required autocomplete="off" />
                        </div> <!-- /user name -->

                        <div class="field-wrap">
                            <label>
                                Mật khẩu<span class="req">*</span>
                            </label>
                            <input name="newPass" type="password" required autocomplete="off" />
                        </div>

                        <button type="submit" class="button button-block" />Tạo tài khoản</button>

                    </form>

                </div>
            </div>
            <ul class="tab-group">
                <li class="tab active"><a href="#login">Đăng nhập</a></li>
                <li class="tab"><a href="#signup">Đăng kí</a></li>
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
                            <input type="text" class="header__search-input" placeholder="Nhập tên phim, diễn viên,....">
                            <!-- Search History -->
                            <div class="header__search-history">
                                <h3 class="header__search-history-heading">Lịch sử tìm kiếm</h3>
                                <ul class="header__search-history-list">
                                    <li class="header__search-history-item">
                                        <a href="">Mùa hè yêu dấu của chúng ta</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="">Yêu nhầm bạn thân</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="">Vườn sao băng</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button class="header__search-btn">
                            <i class="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div class="header-navbar__account">
                        <a class="header-navbar__account-link" onclick="showAccount(true)">Tài khoản</a>
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
                                        <a href="#" class="header-navbar__watch-link">Minh nhất chiến ký</a>
                                    </li>
                                    <li class="header-navbar__watch-item">
                                        <a href="#" class="header-navbar__watch-link-img">
                                            <img src="./Assets/Image/Film/mua-he-yeu-dau-cua-chung-ta/mua-he-yeu-dau2.jpg"
                                                alt="" class="header-navbar__watch-img">
                                        </a>
                                        <a href="#" class="header-navbar__watch-link">Mùa hè yêu dấu của chúng ta</a>
                                    </li>
                                    <li class="header-navbar__watch-item">
                                        <a href="#" class="header-navbar__watch-link-img">
                                            <img src="./Assets/Image/Film/chuyen-than-tien/big.jpg"
                                                alt="" class="header-navbar__watch-img">
                                        </a>
                                        <a href="#" class="header-navbar__watch-link">Chuyện Thần Tiên ở New York 2</a>
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
                                Phim bộ
                            </a>
                        </li>
                        <li class="header-category__position-item header-category__position-item-separate">
                            <a href="chiTietCategory.html" class="header-category__position-link">
                                <i class="fa-solid fa-clapperboard"></i>
                                Phim lẻ
                            </a>
                        </li>
                        <li class="header-category__position-item header-category__position-item-separate">
                            <a href="chiTietCategory.html" class="header-category__position-link">
                                <i class="fa-solid fa-photo-film"></i>
                                Phim chiếu rạp
                            </a>
                        </li>
                        <li class="header-category__position-item">
                            <a class="header-category__position-link" onclick="showAccount(true)">
                                <i class="fa-solid fa-right-to-bracket"></i>
                                Tài khoản
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
                                    Phim Chiếu Rạp
                                </span>
                            </a>
                        </li>
                        <li class="header-category__list-item">
                            <a href="chiTietCategory.html" class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Phim Việt Nam
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
                                    Phim lẻ
                                </span>
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Hàn Quốc</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Trung Quốc</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Đài Loan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Hồng Kông</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Mỹ</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Châu Âu</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Việt Nam</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Thái Lan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim lẻ Nhật Bản</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Phim Bộ
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Hàn Quốc</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Trung Quốc</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Đài Loan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Hồng Kông</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Mỹ</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Châu Âu</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Việt Nam</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Thái Lan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phim bộ Nhật Bản</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Thể Loại
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Hành Động</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Tình Cảm</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Hài Hước</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Hình Sự</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Phiêu Lưu</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Gia Đình</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Thể Thao</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Lịch sử</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Viễn Tưởng</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Quốc Gia
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Hàn Quốc</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Trung Quốc</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Đài Loan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Hồng Kông</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Mỹ</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Châu Âu</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Việt Nam</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Thái Lan</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Nhật Bản</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Năm
                                    <i class="fa-solid fa-caret-down"></i>
                                </span>
                            </a>
                            <ul class="header-category__list-menu">
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2019</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2020</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2021</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2022</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2017</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2018</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2016</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2015</a></li>
                                <li class="header-category__list-menu-item"><a href="chiTietCategory.html"
                                        class="header-category__list-menu-link">Năm 2014</a></li>
                            </ul>
                        </li>
                        <li class="header-category__list-item">
                            <a href="chiTietLichChieu.html" class="header-category__list-item-link">
                                <span class="header-category__list-item-name">
                                    Lịch Chiếu
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
                Phim Mới
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim chiếu rạp</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim lẻ</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim bộ</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim hành động</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim viễn tưởng</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim tâm lý</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim hài hước</a></li>
            </ul>
        </div>
        <div class="footer-one__movie-new">
            <h5 class="footer-one__movie-new__label">
                Phim Hay
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Mỹ</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Hàn Quốc</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Trung Quốc</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Thái Lan</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Việt Nam</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Ma Kinh Dị</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Phim Hoạt Hình</a></li>
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
                Trợ giúp
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Hỏi đáp</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Liên hệ</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Tin tức</a></li>
            </ul>
        </div>
        <div class="footer-one__movie-new">
            <h5 class="footer-one__movie-new__label">
                Thông tin
            </h5>
            <ul class="footer-one__movie-new__list">
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Điều khoản sử dụng</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Chính sách riêng tư</a></li>
                <li class="footer-one__movie-new__item"><a href="#" class="footer-one__movie-new__item-link">Khiếu nại bản quyền</a></li>
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
                Copyright ® 2022 BestMovie ver 1.0 All Rights Reserved.
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
                                                Minh nhất chiến ký
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
                                                Ngược dòng thời gian để yêu anh
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
                                                Mồi quỷ dữ
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
                                                Chuyện Thần Tiên ở New York 2
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
                                                Yêu quái toàn thư
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
                                                Avatar 2: Dòng Chảy Của Nước
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
                Bảng xếp hạng
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
                                Tập 36
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
                                Lyle chú cá sấu biết hát
                            </h6>
                            <p class="home-charts__movie-episode">
                                Tập 36
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
                                Chiến binh báo đen
                            </h6>
                            <p class="home-charts__movie-episode">
                                Tập 36
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
                                Chuyện thần tiên ở New York 2
                            </h6>
                            <p class="home-charts__movie-episode">
                                Tập 36
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
                                Cuộc chiến xuyên không
                            </h6>
                            <p class="home-charts__movie-episode">
                                Tập 36
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
                    Phim sắp chiếu
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
                                    Lyle chú cá sấu biết hát
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
                                    Chiến binh báo đen
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
                                    Chuyện thần tiên ở New York 2
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
                                    Cuộc chiến xuyên không
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