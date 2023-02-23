const elSlider = document.querySelector('.slider');

const imagesArr = [
    '../images/anger.png',
    '../images/bad-habits.png',
    '../images/email.png',
    '../images/sience.png',
    '../images/sport.png',
]


const htmlImgArr = imagesArr.map((item) => {
    const _html = `<div class="item" style="background: url('${item}') no-repeat center center; background-size: cover;"></div>`;
    return _html;
})

const htmlSlider = htmlImgArr.join(' ');

elSlider.innerHTML = htmlSlider;

const elItem = document.querySelector('.slider > .item');
const elItem2 = document.querySelectorAll('.slider > .item');

console.log(elItem2);

elItem.addEventListener('click', (ev) => {
    console.log('бум');
})
