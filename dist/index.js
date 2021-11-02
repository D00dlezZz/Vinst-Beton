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

        const zilImg = [
            "./img/item1.webp",
            "./img/item2.webp",
            "./img/item3.webp",
            "./img/item4.webp",
            "./img/item1.webp",
        ]
        const aninoImg = [
            "./img/item2.webp",
            "./img/item3.webp",
            "./img/item4.webp",
            "./img/item2.webp",
            "./img/item1.webp",
        ]
        const reutovImg = [
            "./img/item4.webp",
            "./img/item4.webp",
            "./img/item2.webp",
            "./img/item1.webp",
            "./img/item3.webp",
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
            infoTitle.innerText = "РБУ Реутов: г. Реутов, Проспект Мира д. 36А";
            infoText.innerText = "Производственная площадка расположена на востоке Москвы. Удобный выезда на МКАД и автомагистрали востока Москвы. На данной площадке расположены РБУ Stetter и Elkon. Суммарная производительность которых составляет более 110 кубометров в час готовой продукции. На данном производстве так же имеется собственная лаборатория. Здесь расположен крупный перевалочный узел нашей компании. Железнодорожный путь и большая территория площадки позволяют переваливать большие объемы цемента и сыпучих материалов."
        }
    });

})



closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none',
    blockInfo.classList.remove("active");
    body.style.overflow = "scroll"
})



dropdownBtn.addEventListener('click', () => {
    document.querySelector(".input").checked = true;

    if (dropdownBtn.classList.contains("active")) {
        document.querySelector(".dropdown__list").classList.add("active");
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
        dropdownBtn.classList.remove("active");

    } else {
        document.querySelector(".dropdown__list").classList.remove("active");
        overlay.style.display = 'none'
        body.style.overflow = 'scroll';
        dropdownBtn.classList.add("active");
        document.querySelector(".input").checked = false;

    }
})

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

smoothLinks.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".input").checked = false;
        dropdownBtn.classList.add("active");
        document.querySelector(".dropdown__list").classList.remove("active")
        overlay.style.display = 'none';
        body.style.overflow = 'scroll';
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
  dragFree: true,
  containScroll: "trimSnaps",
  loop: true
});
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);

embla.on("select", disablePrevAndNextBtns);
embla.on("init", disablePrevAndNextBtns);



