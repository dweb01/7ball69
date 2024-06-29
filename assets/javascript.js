
function detail(id){
  location.href = `detail.html?id=${id}`;
}
function url(){
  location.href = ('https://www.hay88.one/?inviteCode=2610813');
}
$(document).ready(function(){
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
  const swiper = new Swiper('#swiper1', {
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: '#swiper-pagination1',
      },
      // breakpoints: {
      //   640: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      // },

      navigation: {
        nextEl: '#swiper-button-next1',
        prevEl: '#swiper-button-prev1',
      },
      autoplay: {
        delay: 3000,
      }
    
    });


    $("blockquote p strong").closest('blockquote').addClass("relative");



    const header = `    <div class="bg-[#132D4D] py-3">
      <div class="container mx-auto">
        <div class=" flex items-center justify-between mx-auto">
          <div class="">
            <a href="./index.html">
              <img class="max-w-[12rem] md:max-w-[20rem]" src="./assets/images/logo.png" alt=""></a>
          </div>

          <ul
            class="items-center py-8 text-[#3DCCFF] font-normal flex-wrap *:leading-10 *:px-3 hidden md:flex *:transition-all text-2xl *:duration-500">
            <li class="relative"><a href="./tin-tuc-7ballvn.html" class="tittle_navbar hover:text-white duration-300">Tin tức
                7ball69</a></li>
            <li class="relative"><a href="./huong-dan-dang-ky-tai-khoan-7ballvn.html"
                class="tittle_navbar hover:text-white duration-300">Đăng ký</a></li>
            <li class="relative"><a href="./huong-dan-7ballvn.html"
                class="tittle_navbar hover:text-white duration-300">Games</a></li>
            <li class="relative"><a href="./khuyen-mai.html"
                class="tittle_navbar hover:text-white duration-300">Khuyến mãi</a></li>
            <li class="relative"><a href="./dai-ly-7ball-huong-dan-tham-gia-don-gian-hoa-hong-khong-gioi-han.html"
                class="tittle_navbar hover:text-white duration-300">Đại lý</a></li>
            <li class="relative"><a href="./blog.html"
                class="tittle_navbar hover:text-white duration-300">Blog</a></li>
            <li class="relative"><a href="./tai-app.html" class="tittle_navbar hover:text-white duration-300">Tải
                App 7ball69</a></li>
          </ul>
          <div class="menu-icon md:hidden duration-500">
            <label class="hamburger">
              <svg viewBox="0 0 32 32">
                <path class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                </path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="py-3 bg-[#F5F5F5]">
      <div class="container mx-auto">
        <div class="flex justify-center gap-7">
          <button onclick="url()" class="bg-[#0170B9] hover:bg-[#3A3A3A] py-4 px-10 text-2xl text-white rounded-sm duration-200">Đăng
            ký</button>
          <button onclick="url()" class="bg-[#515151] hover:bg-[#C0C0C0] py-4 px-10 text-2xl text-white rounded-sm duration-200">Đăng
            nhập</button>
        </div>
      </div>
    </div>
    <div class="bg-white py-1 hidden dropdown">
      <ul class="*:text-[#0170B9] text-xl *:my-10 *:ml-10">
        <li class="relative"><a href="./tin-tuc-7ballvn.html" class="tittle_navbar hover:text-gray-800  duration-300">7Ball |
            777ball – Đăng ký, đăng nhập 7ball cc chính thức</a></li>
        <li class="relative"><a href="./huong-dan-dang-ky-tai-khoan-7ballvn.html"
            class="tittle_navbar hover:text-gray-800  duration-300">7ballvn huong dan dang ky tai khoan</a></li>
    
        <li class="relative"><a href="./huong-dan-7ballvn.html"
            class="tittle_navbar hover:text-gray-800  duration-300">Đại lý 7ball – Hướng dẫn tham gia đơn giản. Hoa hồng
            không giới hạn.</a></li>

        <li class="relative"><a href="./gioi-thieu.html" class="tittle_navbar hover:text-gray-800  duration-300">Giới
            thiệu công ty 7ball</a></li>
        <li class="relative"><a href="./huong-dan-nap-tien-7ballvn.html"
            class="tittle_navbar hover:text-gray-800  duration-300">Hướng dẫn nạp tiền</a></li>
        
      </ul>
    </div>`;
    $("#header").html(header);
 
    const content_right = `          <h3 class="mb-7"><strong>Bài viết mới nhất:</strong></h3>
          <div class="*:text-[#0170B9] text-xl *:mb-3">
            <p><a onclick="detail(5)" class="tittle_navbar cursor-pointer  hover:text-gray-800  duration-300 " >Thuật ngữ cá độ bóng đá:
                Nắm vững kiến thức để chiến thắng</a></p>
            <p><a onclick="detail(17)" class="tittle_navbar cursor-pointer hover:text-gray-800  duration-300 ">Khám phá chi tiết kèo
                giao bóng trước tại nhà cái</a></p>
            <p><a onclick="detail(18)" class="tittle_navbar cursor-pointer hover:text-gray-800  duration-300 ">Dàn Đề 10 Số Bất Tử:
                Phương Pháp và Kinh Nghiệm Chơi</a></p>
            <p><a onclick="detail(14)" class="tittle_navbar cursor-pointer hover:text-gray-800  duration-300 ">Cách cai nghiện cờ bạc hiệu quả nhất</a></p>
            <p><a onclick="detail(12)" class="tittle_navbar cursor-pointer hover:text-gray-800  duration-300 ">Những khuyến mãi hấp dẫn nhất tại 7ballbet</a></p>
            <p><a onclick="detail(6)" class="tittle_navbar cursor-pointer hover:text-gray-800  duration-300 ">Nuôi lô bạch thủ khung 3
                ngày</a></p>
            <p><a onclick="detail(7)" class="tittle_navbar cursor-pointer hover:text-gray-800  duration-300 ">Tổng hợp các loại kèo
                việt vị mà bạn cần biết</a></p>

          </div>
          `;
    $("#content_right").html(content_right);

    const footer = `
        <div class="container mx-auto ">
      <div class="grid grid-cols-2 md:grid-cols-3">
        <div class="*:mb-5">
          <h3 class="font-bold text-2xl text-[#3a3a3a]">Thông tin liên hệ:</h3>
          <p><strong>Website:</strong> 7ball69.com</p>
          <p><strong>Địa chỉ:</strong> 491 Đường Thống Nhất, Phường 16, Gò Vấp, Thành phố Hồ Chí Minh</p>
        </div>
        <div class="mx-auto">
          <div class="*:text-[#0170B9] text-xl *:mb-3">
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Blog</a></p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Tải 7ball</a></p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Đăng ký</a></p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Khuyến mãi</a></p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Giới thiệu</a></p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Chính sách bảo mật</a>
            </p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Liên hệ</a></p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Quy tắc và điều khoản</a>
            </p>
            <p><a href="./index.html" target="_blank" class="tittle_navbar hover:text-gray-800  duration-300 ">Chơi cá trách nhiệm</a>
            </p>

          </div>
        </div>
        <div class="mx-auto *:mb-5">
          <div class="flex gap-3">
            <svg onclick="url()" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
              </path>
            </svg>
            <svg onclick="url()" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            <svg onclick="url()" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <title id="email"> Email </title> <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path></svg>
            <svg onclick="url()" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            <svg onclick="url()" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            <svg onclick="url()" class="w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
          </div>
          <div>
            <img src="./assets/images/dmca_protected_sml_120n.png" alt="">
          </div>
        </div>
      </div>
    </div>
    
    `;

  $("#footer").html(footer);
  const backtotop = `<button class="Btn-backtotop1 ">
          <svg  class="Btn cursor-pointer-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
  });
  btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
  }); 
  const link_recent_post = `
     <p onclick="detail(15)" class=" hover:text-gray-500">I9bet vang danh châu Á nhờ vào chất lượng đẳng cấp</p>
                                <p class=""><a href="./nap-tien-vin777.html" class="hover:text-gray-500">Hướng Dẫn Nạp Tiền Vin7777 Nhanh Chóng, Đơn Giản Hiện Nay</a></p>
                                <p onclick="detail(17)" class=" hover:text-gray-500">Bật mí cách truy cập link Typhu88 nạp tiền cực dễ dàng
                                </p>
                                <p onclick="detail(5)" class=" hover:text-gray-500">Cẩm nang kinh nghiệm đặt kèo bóng đá giành chắc phần
                                    thắng trong tay</p>
                                <p onclick="detail(13)" class=" hover:text-gray-500">Casino J88 – Thiên đường giải trí đẳng cấp nhất làng cá cược</p>
        `;
  $("#link_recent_post").html(link_recent_post);


  // $('.header2  ul.items-center > li').each(function() {
  //   a = $(this).find(".tittle_navbar").text();
    
  //   if(active == a){
      
  //     $(this).addClass('B');
  //   }
  // });

  // $("#content_right .link").each(function(){
  //   c = $(this).find("#menu_link").text();
  //   if(active == c){
  //     $(this).find("#menu_link").addClass("text-gray-900");
      
  //   }
    
    
  // });


  $(".menu-icon").on("click", function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active");

        $(".dropdown").addClass("hidden");
    }
    else{
        $(this).addClass("active");
        $(".dropdown").removeClass("hidden");
    }
  });
  $(document).on("click", function (event) {
      if (!$(event.target).closest(".side-menu-mobile").length && !$(event.target).closest(".menu-icon").length ) {
        
      }
    });


    $('#showloading').delay(500).queue(function(next) {
      $(this).addClass('hidden');
      next();
    });


    $(".custom p a strong").closest("p").find("strong").addClass("text-[#0000FF]");
    $(".custom p a strong").closest("p").addClass("text-center");

});

