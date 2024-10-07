const users = [
    {
        id:0,
        avatarUrl: "https://dispatch.cdnser.be/wp-content/uploads/2018/03/20180307233903_5wkyowmq_400x400.jpg",
        username: "user 1",
        imgUrl: "https://image.cine21.com/resize/cine21/still/2008/1120/M0020005_untitled[W578-].jpg"
    },
    {
        id:1,
        avatarUrl: "https://i.pinimg.com/736x/a0/ed/97/a0ed97759df672996450fa40c80cd763.jpg",
        username: "user 2",
        imgUrl: "https://flexible.img.hani.co.kr/flexible/normal/590/381/imgdb/resize/2008/1129/6000139628_20081129.JPG"
    },
    {
        id:2,
        avatarUrl: "https://i.pinimg.com/236x/b6/f7/ea/b6f7ea16a4c9d63440c749c4f4fda815.jpg",
        username: "user 3",
        imgUrl: "https://i.pinimg.com/736x/73/8f/bc/738fbce0702b9d2ce0cc4d963f322221.jpg"
    },
];
const wrapEl = document.querySelector('.wrap');
const avatarAll = document.querySelectorAll('.avatar');
const usernameAll = document.querySelectorAll('.username');
const bgAll = document.querySelectorAll('.bg');
const menuEl = document.querySelector('.menu');
const menuWrapEl = document.querySelector('.menu_wrap');
let isClicked = true;

for(let i = 0; i < users.length; i++){
    avatarAll[i].innerHTML = `<img src = "${users[i].avatarUrl}" alt = "userimg">`;
    usernameAll[i].innerTEXT = users[i].username;
    bgAll[i].innerHTML = `<img src = "${users[i].imgUrl}" alt = "feedimg">`;
}

const heartHandler = (e) => {
    if(e.target.classList.contains('fa-regular')){
        e.target.parentNode.innerHTML = '<i class = "fa-solid fa-heart fa-xl full_heart"></i>'
    }else if(e.target.classList.contains("full_heart")){
        e.target.parentNode.innerHTML = '<i class = "fa-regular fa-heart fa-xl"></i>'
    }
}

const menuHandler = () => {
    if(isClicked === true){
        menuWrapEl.classList.add('menu_active');
        isClicked = false;
    }else if(!isClicked){
        menuWrapEl.classList.remove('menu_active');
        isClicked = true;
    }
};


wrapEl.addEventListener('click', heartHandler);
menuEl.addEventListener('click', menuHandler);

