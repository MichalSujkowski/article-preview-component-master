const shareBtn = document.querySelector('.arrow');
const shareIcons = document.querySelector('.share-icons');

const shareFunc = () => {
    shareIcons.classList.toggle('active');
}

shareBtn.addEventListener('click', shareFunc);
shareIcons.addEventListener('click', () => {
    shareIcons.classList.remove('active');
});