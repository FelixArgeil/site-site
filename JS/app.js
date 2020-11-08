
const devel = document.querySelector('.development');

const linkQ = document.querySelectorAll('.link__q');
const linkW = document.querySelectorAll('.link__w');
const linkE = document.querySelectorAll('.link__e');



//Попап окна, Кривые
linkQ.forEach(linkClickedQ);
function linkClickedQ (item) {
	item.addEventListener("click", function() {

		devel.classList.toggle("active__one");
	});
}
linkW.forEach(linkClickedW);
function linkClickedW (item) {
	item.addEventListener("click", function() {

		devel.classList.toggle("active__two");
	});
}
linkE.forEach(linkClickedE);
function linkClickedE (item) {
	item.addEventListener("click", function() {

		devel.classList.toggle("active__three");
	});
}


const animItems = document.querySelectorAll('._anim-items');	/*К классу   ._anim-items   добавляется класс   _active   */
//Анимация при скролле
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}

		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}



//menuBurger
const menuIcon = document.querySelector('.hamburger__menu');
const navBar = document.querySelector('.section__menu');

menuIcon.addEventListener('click', () => {
	navBar.classList.toggle("change");
})


//Плавный Скролл
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .180;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}