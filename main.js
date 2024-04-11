const inputUser = document.querySelector('.user');
const userLabel = document.querySelector('.label-user');
inputUser.addEventListener('focus', ()=>{
    userLabel.style.transform = "translateX(0)";
    userLabel.style.transform = "translateY(0)";
});