const shareBtn = document.querySelector('.arrow');
const shareIcons = document.querySelector('.share-icons');
const personInfo = document.querySelector('.person-info');

const shareFunc = () => {
    shareIcons.classList.toggle('active');
    if (window.outerWidth <= 775) {
        personInfo.style.opacity = '0';
        shareIcons.style.zIndex = "100";
    }
}

shareBtn.addEventListener('click', shareFunc);

shareIcons.addEventListener('click', () => {
    shareIcons.classList.remove('active');
    if (window.outerWidth <= 775) {
        personInfo.style.opacity = '1';
        shareIcons.style.zIndex = "-100";
    }
});

