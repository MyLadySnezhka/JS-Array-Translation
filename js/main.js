const elSlider = document.querySelector('.slider');
const elOnline = document.querySelector('.online');

const imagesArr = [
    '../images/anger.png',
    '../images/bad-habits.png',
    '../images/email.png',
    '../images/sience.png',
    '../images/sport.png',
]

elOnline.style.backgroundImage = "url('../images/filmsplash.png')";


const renderSlider = () => {

const htmlImgArr = imagesArr.map((item) => {
    const _html = `<div class="item" style="background: url('${item}') no-repeat center center; background-size: cover;"></div>`;
    return _html;
})

const htmlSlider = htmlImgArr.join(' ');

elSlider.innerHTML = htmlSlider;

};

renderSlider();

elSlider.addEventListener('click', (ev) => {
    elOnline.style.backgroundImage = ev.target.style.backgroundImage;
})
