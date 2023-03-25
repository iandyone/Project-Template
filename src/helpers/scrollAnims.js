// === ADD TO INDEX.JS TO ACTIVATE === //

// const animItems = document.querySelectorAll("._anim-items");
// if (animItems.length > 0) {
//     window.addEventListener("scroll", animOnScroll);
    
//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }

// ================================== //


// === Animations === //
export function animOnScroll() {
    for (let i = 0; i < animItems.length; ++i) {
        const animItem = animItems[i];
        const animItemHeigth = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        const animItemPoint = (animItemHeigth > window.innerHeight) ?
            window.innerHeight - window.innerHeight / animStart
            :
            window.innerHeight - animItemHeigth / animStart;
        if ((pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeigth))) {
            animItem.classList.add(`_active`);
        } else if (animItem.classList.contains("_anim-repeat")) {
            animItem.classList.remove(`_active`);
        }
    }
}

export function offset(element) {
    const rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}