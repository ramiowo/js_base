const formEl = document.querySelector('form');
const commentInput = document.querySelector('.commentInput');
const commentList = document.querySelector('.commentList');
const removeBtn = document.querySelector('.removeBtn');

let comments = JSON.parse(localStorage.getItem("comments")) || [];

const addComment = (comment) => {
    const userEl = document.createElement('div');
    userEl.classList.add('userProfile');
    
    const commentEl = document.createElement('li');
    const profileEl = document.createElement('div');
    profileEl.innerHTML = '<img  class = "profileImg" src = "https://i.pinimg.com/736x/2a/9c/0b/2a9c0bc5aaf2e6c8c26416ad03dcc6cc.jpg" alt = "profileImg">'
    commentEl.innerText = comment;
    userEl.append(profileEl);
    userEl.append(commentEl);
    commentList.append(userEl);
};

comments.forEach(addComment);

const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = commentInput.value.trim();
    if(!inputValue) return ;

    comments.push(inputValue);

    localStorage.setItem("comments", JSON.stringify(comments));

    addComment(inputValue);

    commentInput.value = "";

    // console.log(inputValue);

};

const handleRemove = () => {
    localStorage.removeItem("comments");
    window.location.reload();
}


formEl.addEventListener("submit", handleSubmit);
removeBtn.addEventListener("click", handleRemove);