const aboutBtn = document.querySelectorAll(".production__btn")
const infoTitle = document.querySelector(".info__title")
const infoText = document.querySelector(".info__text")
const blockInfo = document.getElementById('blockInfo');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const body = document.getElementById('body');
const dropdownBtn = document.getElementById('dropdown__btn');



aboutBtn.forEach((event) => {

    event.addEventListener('click', () => {
        blockInfo.style.display = "block";
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
        blockInfo.style.animation = 'up 1s'

        if (event.id === 'firstBtn') {
            infoTitle.innerText = "РБУ ЗИЛ: ул. Автозаводская 23, стр. 436";
            infoText.innerText = "Производственная площадка расположена в центре Москвы. Удобный выезд на ТТК и центральные автомагистрали Юга Москвы. На данной площадке расположены РБУ Liebherr и Elkon. Суммарная производительность которых составляет более 170 кубометров готовой продукции. Площадка включает большие склады сыпучих материалов. На площадке располагается собственная лаборатория и зона технического обслуживания своего парка АБС."

        } else if (event.id === 'secondBtn') {
            infoTitle.innerText = "РБУ STETTER: Кирпичные Выемки д.14 к.4";
            infoText.innerText = "Производственная площадка расположена в центре Москвы. Удобный выезд на ТТК и центральные автомагистрали Юга Москвы. На данной площадке расположены РБУ Liebherr и Elkon. Суммарная производительность которых составляет более 170 кубометров готовой продукции. Площадка включает большие склады сыпучих материалов. На площадке располагается собственная лаборатория и зона технического обслуживания своего парка АБС."

        } else {
            infoTitle.innerText = "РБУ Реутов: г. Реутов, Проспект Мира д. 36А";
            infoText.innerText = "Производственная площадка расположена на востоке Москвы. Удобный выезда на МКАД и автомагистрали востока Москвы. На данной площадке расположены РБУ Stetter и Elkon. Суммарная производительность которых составляет более 110 кубометров в час готовой продукции. На данном производстве так же имеется собственная лаборатория. Здесь расположен крупный перевалочный узел нашей компании. Железнодорожный путь и большая территория площадки позволяют переваливать большие объемы цемента и сыпучих материалов."
        }
    });

})



closeBtn.addEventListener('click', () => {
    blockInfo.style.animation = 'down 0.7s';
    setTimeout(() => {overlay.style.display = 'none',blockInfo.style.display = "none", body.style.overflow = "scroll"}, 700)
})



dropdownBtn.addEventListener('click', () => {
    document.querySelector(".input").checked = true;

    if (dropdownBtn.classList.contains("active")) {
        document.querySelector(".dropdown__list").style.display = 'flex';
        overlay.style.display = 'block';
        body.style.overflow = 'hidden';
        dropdownBtn.classList.remove("active");

    }else {
        document.querySelector(".dropdown__list").style.display = 'none';
       overlay.style.display = 'none'
        body.style.overflow = 'scroll';
        dropdownBtn.classList.add("active");
        document.querySelector(".input").checked = false;

    }
})

const smoothLinks = document.querySelectorAll('.nav');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

    
smoothLinks.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector(".input").checked = false;
        dropdownBtn.classList.add("active");
        document.querySelector(".dropdown__list").style.display = 'none';
        overlay.style.display = 'none';
        body.style.overflow = 'scroll';
    })
})


const animItems = document.querySelectorAll('_anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeught;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }else {
                animItem.classList.remove('_active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}