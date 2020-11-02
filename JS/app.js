
const devel = document.querySelector('.development');

const linkQ = document.querySelectorAll('.link__q');
const linkW = document.querySelectorAll('.link__w');
const linkE = document.querySelectorAll('.link__e');




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



