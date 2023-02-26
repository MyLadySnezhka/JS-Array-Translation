const elSlider = document.querySelector('.slider');
const elOnline = document.querySelector('.online');

const imagesArr = [
    '../images/anger.png',
    '../images/bad-habits.png',
    '../images/email.png',
    '../images/sience.png',
    '../images/sport.png',
]

const startImage = "url('../images/filmsplash.png')";
elOnline.style.backgroundImage = startImage;

const renderSlider = () => {
    const htmlImgArr = imagesArr.map((item) => {
        const _html = `<div class="item" style="background-image: url('${item}')"></div>`;
        return _html;
    }).join(' ');

    elSlider.innerHTML = htmlImgArr;
};

renderSlider();

elSlider.addEventListener('click', (ev) => {   
    if(ev.target.classList.value != 'item') {
        elOnline.style.backgroundImage = startImage;
        ev.target.classList.remove('shadow');
        return;
        } else {
            // console.log(ev.target);
            // console.dir(ev.target);
            elOnline.style.backgroundImage = ev.target.style.backgroundImage;
            ev.target.classList.add('shadow');
            //ev.target.classList.toggle('shadow');
            };
    console.log(ev.target.classList);
})
