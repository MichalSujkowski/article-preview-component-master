const shareBtn = document.querySelector('.share-arrow');
const personInfo = document.querySelector('.personal-info');
const shareIcons = document.querySelector('.share-icons');
const secShareIco = document.querySelector('.share-arrow-active');

shareBtn.addEventListener('click', function () {
    personInfo.classList.remove('active');
    shareIcons.classList.add('active');
});

secShareIco.addEventListener('click', function() {
    personInfo.classList.add('active');
    shareIcons.classList.remove('active');
});
