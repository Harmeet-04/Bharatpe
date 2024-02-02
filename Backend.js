const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goprev = () => {
    counter--;
    slideimage();
}
const gonext = () => {

    counter++;
    if (counter==5) {
        gonext().removeEventListener
    }
    slideimage();
}

const slideimage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const moves = document.querySelectorAll(".whyimg");
var count = 0;
moves.forEach(
    (whyimg, index) => {
        whyimg.style.bottom = `${index * 100}%`
    }
)
const goup = () => {
    count--;
    moveimage();
}
const godown = () => {
    count++;
    moveimage();
}
const moveimage = () => {
    moves.forEach(
        (whyimg) => {
            whyimg.style.transform = `translateY(${count * 100}%)`
        }
    )
}