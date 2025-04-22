// slide khong cham
$('.inner-list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows:false,
    autoplay:true,
    autoplaySpeed :3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
// slide khong cham
// slide co Cham
$('.blog').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  autoplay:true,
  autoplaySpeed :3000,
  dots:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// slide co Cham
$('.inner-hightlight').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:false,
  autoplay:false,
  autoplaySpeed :3000,
  dots:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});
// slide hightlight
$('.inner-step').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows:false,
  autoplay:false,
  autoplaySpeed :3000,
  dots:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});
// inner-bar
const buttonMenu = document.querySelector("#inner-bar");
const menu = document.querySelector("#menu");
const buttonClose = document.querySelector("#buttonClose");

buttonMenu.onclick = function(){
  menu.classList.add("show")
};
buttonClose.onclick = function(){
  menu.classList.remove("show")
};
//menu-mini
const buttonMenuMini = document.querySelectorAll(".menu ul li i");
buttonMenuMini.forEach(item => {
  item.addEventListener("click",function(){
    const menuMini = this.closest("li").querySelector(".menu-mini");
    menuMini.classList.toggle("show");
  });
});
// gui du lieu len server
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); //ngăn tải lại trang
  alert("🎉 Gửi yêu cầu thành công!");
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const business = document.getElementById("business").value;

  const data = {
      name: name,
      phone: phone,
      business: business
  };
  // Gửi dữ liệu đến server
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log('guithanhcong', data))
  .catch(error => console.error('loi', error));
});
//guidulieufooter
document.getElementById("formTwo").addEventListener("submit", function(event) {
  event.preventDefault(); //ngăn tải lại trang
  alert("🎉 Gửi Đăng Ký thành công!");
  const phoneTwo = document.getElementById("phoneTwo").value;
  const data = {
      phone: phoneTwo
  };
  // Gửi dữ liệu đến server
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log('guisodienthoai', data))
  .catch(error => console.error('loi', error));
});