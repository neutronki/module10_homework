const btn = document.querySelector('.j-btn-test');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;


btn.addEventListener('click', () => {

alert(`Размеры экрана монитора: ${screenWidth}px x ${screenHeight}px. 
Размер экрана с учётом полосы прокрутки: ${windowInnerWidthScroll}px x ${windowInnerHeightScroll}px.
Размер экрана без учёта полосы прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px.`);

});