
/*pageWidth = document.documentElement.scrollWidth;
if (pageWidth > 770 && pageWidth < 1120) {
    //Items = document.querySelectorAll('.extra-item768');
    var Items = document.querySelectorAll('.brand_select');
    for (var i = 0; i < 6; i++) {
        Items[i].classList.toggle('extra-item__visiable');
    }
    for (var i = 6; i < Items.length; i++) {
        Items[i].classList.toggle('extra-item__hidden');
    }
} else if (pageWidth >= 1120) {
    var Items = document.querySelectorAll('.brand_select');
    for (var i = 0; i < 8; i++) {
        Items[i].classList.toggle('extra-item__visiable');
    }
    for (var i = 8; i < Items.length; i++) {
        Items[i].classList.toggle('extra-item__hidden');
    }
    //Items = document.querySelectorAll('.extra-item1120');
    //Items.forEach(x => x.classList.toggle('extra-item768'));
}
console.log(Items);*/
var Items = document.querySelectorAll('.brand_select');
let ExpandButton = document.querySelector('.button');
ExpandButton.onclick = function() {
    btnContent = document.querySelector('.button > span');
    ExpandButton.classList.toggle('button1');
    btnContent.innerHTML =
      (btnContent.innerHTML === 'Показать все') ? 
      (btnContent.innerHTML = 'Скрыть') 
      : btnContent.innerHTML = 'Показать все';
    //var Items = document.querySelectorAll('.brand_select');
    Items.forEach(x => x.classList.toggle('brand_select'));
    Items.forEach(x => x.classList.toggle('brand_select1'));  
};

var swiper = new Swiper(".swiper", {
    speed: 1000,
    loop: true,
    updateOnWindowResize: true,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        360: {
            slidesPerView: 1.47,
            spaceBetween: 20
        },
        390: {
            slidesPerView: 1.65,
            spaceBetween: 20
        },
        767.8: {
            enabled: false
        }
    }
});

