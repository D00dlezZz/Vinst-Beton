const aboutBtn = document.querySelectorAll(".production__btn")
const infoTitle = document.querySelector(".info__title")
const infoText = document.querySelector(".info__text")
const blockInfo = document.getElementById('blockInfo');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const body = document.getElementById('body');
const dropdownBtn = document.getElementById('dropdown__btn');
const animItems = document.querySelectorAll('._anim-items');
const smoothLinks = document.querySelectorAll('.nav');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains("_anim-no-hide")) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300)
}



aboutBtn.forEach((event) => {
    event.addEventListener('click', () => {
        blockInfo.classList.add("active");
        overlay.style.display = "block";
        body.style.overflow = 'hidden';
        body.style.touchAction = "none";
        document.querySelector('header').style.zIndex = "1"

        const zilImg = [
            "./img/itemsImg/item2.webp",
            "./img/itemsImg/item3.webp",
            "./img/itemsImg/item4.webp",
            "./img/itemsImg/item1.webp",
            "./img/itemsImg/item2.webp",
        ]
        const aninoImg = [
            "./img/itemsImg/item1.webp",
            "./img/itemsImg/item2.webp",
            "./img/itemsImg/item4.webp",
            "./img/itemsImg/item3.webp",
            "./img/itemsImg/item4.webp",
        ]
        const reutovImg = [
            "./img/itemsImg/item1.webp",
            "./img/itemsImg/item3.webp",
            "./img/itemsImg/item4.webp",
            "./img/itemsImg/item3.webp",
            "./img/itemsImg/item1.webp",
        ]

        if (event.id === 'firstBtn') {
            for(let index = 0; index < zilImg.length; index++) {
                document.querySelectorAll(".embla__slide__img").forEach((el) => {
                    el.setAttribute('src', zilImg[index++]) 
                })
            }
            infoTitle.innerText = "РБУ ЗИЛ: ул. Автозаводская 23, стр. 436";
            infoText.innerText = "Производственная площадка расположена в центре Москвы. Удобный выезд на ТТК и центральные автомагистрали Юга Москвы. На данной площадке расположены РБУ Liebherr и Elkon. Суммарная производительность которых составляет более 170 кубометров готовой продукции. Площадка включает большие склады сыпучих материалов. На площадке располагается собственная лаборатория и зона технического обслуживания своего парка АБС."

        } else if (event.id === 'secondBtn') {
            for(let index = 0; index < aninoImg.length; index++) {
                document.querySelectorAll(".embla__slide__img").forEach((el) => {
                    el.setAttribute('src', aninoImg[index++]) 
                })
            }
            infoTitle.innerText = "РБУ АНИНО: Кирпичные Выемки д.14 к.4";
            infoText.innerText = "Производственная площадка расположена в центре Москвы. Удобный выезд на ТТК и центральные автомагистрали Юга Москвы. На данной площадке расположены РБУ Liebherr и Elkon. Суммарная производительность которых составляет более 170 кубометров готовой продукции. Площадка включает большие склады сыпучих материалов. На площадке располагается собственная лаборатория и зона технического обслуживания своего парка АБС."

        } else {
            for(let index = 0; index < reutovImg.length; index++) {
                document.querySelectorAll(".embla__slide__img").forEach((el) => {
                    el.setAttribute('src', reutovImg[index++]) 
                })
            }
            infoTitle.innerText = "РБУ РЕУТОВ: г. Реутов, Проспект Мира д. 36А";
            infoText.innerText = "Производственная площадка расположена на востоке Москвы. Удобный выезда на МКАД и автомагистрали востока Москвы. На данной площадке расположены РБУ Stetter и Elkon. Суммарная производительность которых составляет более 110 кубометров в час готовой продукции. На данном производстве так же имеется собственная лаборатория. Здесь расположен крупный перевалочный узел нашей компании. Железнодорожный путь и большая территория площадки позволяют переваливать большие объемы цемента и сыпучих материалов."
        }
    });

})



closeBtn.addEventListener('click', () => {
    document.querySelector('header').style.zIndex = "2"
    overlay.style.display = 'none',
    blockInfo.classList.remove("active");
    body.style.overflow = "scroll";
    body.style.touchAction = "auto";

})



dropdownBtn.addEventListener('click', () => {
    document.querySelector(".input").checked = true;

    if (dropdownBtn.classList.contains("active")) {
        document.querySelector(".dropdown__list").classList.add("active");
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
        body.style.touchAction = "none";
        dropdownBtn.classList.remove("active");

    } else {
        document.querySelector(".dropdown__list").classList.remove("active");
        overlay.style.display = 'none'
        body.style.overflow = 'scroll';
        body.style.touchAction = "auto";
        dropdownBtn.classList.add("active");
        document.querySelector(".input").checked = false;

    }
})

smoothLinks.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".input").checked = false;
        dropdownBtn.classList.add("active");
        document.querySelector(".dropdown__list").classList.remove("active")
        overlay.style.display = 'none';
        body.style.overflow = 'scroll';
        body.style.touchAction = "auto";
    })
})


const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    prevBtn.addEventListener('click', embla.scrollPrev, false);
    nextBtn.addEventListener('click', embla.scrollNext, false);
  };
  
const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
    return () => {
      if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
      else prevBtn.setAttribute('disabled', 'disabled');
  
      if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
      else nextBtn.setAttribute('disabled', 'disabled');
    };
  };
  
const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const embla = EmblaCarousel(viewPort, {
  loop: true,
  dragFree: true,
  containScroll: "trimSnaps",
});
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);

embla.on("select", disablePrevAndNextBtns);
embla.on("init", disablePrevAndNextBtns);

if (window.outerWidth < 768) {
    document.querySelectorAll(".mobile-seach").forEach((element) => {
        element.removeAttribute('href');
        element.addEventListener('click', () => {
            document.querySelector('header').style.zIndex = "1"
            document.querySelector(".select").classList.add("activeNav");
            overlay.style.display = "block";
            body.style.overflow = 'hidden';
            body.style.touchAction = "none";
    
            if (element.id === 'anino') {
                document.querySelector(".yandex").setAttribute('href', 'https://yandex.ru/maps/213/moscow/house/ulitsa_kirpichnyye_vyyemki_14s4/Z04YcAZhSUcDQFtvfXl5cnRlYg==/?ll=37.611024%2C55.583866&z=16.87')
                document.querySelector(".google").setAttribute('href', 'https://www.google.ru/maps/place/Кирпичные+Выемки+ул.,+14+строение+4,+Москва,+117535/@55.583847,37.6089293,17z/data=!3m1!4b1!4m5!3m4!1s0x414aadf4cb581e5b:0x6d1d7acbc587aa99!8m2!3d55.583844!4d37.611118?hl=ru')
                document.querySelector(".navi").setAttribute('href', 'yandexnavi://build_route_on_map?lat_to=55.583866&lon_to=37.611024')
            }else if (element.id === 'reutov') {
                document.querySelector(".yandex").setAttribute('href', 'https://yandex.ru/maps/21621/reutov/house/prospekt_mira_36a/Z04YfgFoTEUPQFtvfXt2cXllbA==/?ll=37.868507%2C55.770568&z=16.66')
                document.querySelector(".google").setAttribute('href', 'https://www.google.ru/maps/place/пр.+Мира,+36а,+Реутов,+Московская+обл.,+143960/@55.7727133,37.8645669,17z/data=!3m1!4b1!4m5!3m4!1s0x414acb08556b9b1d:0x40ff9bbb71b49463!8m2!3d55.7727103!4d37.8667556')
                document.querySelector(".navi").setAttribute('href', 'yandexnavi://build_route_on_map?lat_to=55.770568&lon_to=37.868508')
            }else {
                document.querySelector(".yandex").setAttribute('href', 'https://yandex.ru/maps/213/moscow/house/avtozavodskaya_ulitsa_23s436/Z04YcARkSEIEQFtvfXp5eH9jbQ==/?ll=37.634173%2C55.689309&z=16.66')
                document.querySelector(".google").setAttribute('href', 'https://www.google.ru/maps/place/Автозаводская+ул.,+23,+Москва,+115280/@55.7035373,37.6320998,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54b48d6ca2f37:0x656a608db27a9e27!8m2!3d55.7035343!4d37.6342885')
                document.querySelector(".navi").setAttribute('href', 'yandexnavi://build_route_on_map?lat_to=55.689309&lon_to=37.634173')
            }
        })
    })
    
    document.getElementById('close').addEventListener("click", () => {
        document.querySelector('header').style.zIndex = "2"
        document.querySelector(".select").classList.remove("activeNav");
        overlay.style.display = "none";
        body.style.overflow = 'scroll';
        body.style.touchAction = "auto";
    })
}


jQuery(document).ready(function ($) {
    $("a.nav").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 1000);
    });
    function slide() {
        $(".embla__button--next").click();
    }
    setInterval(slide, 3000);
});


