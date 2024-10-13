const formEl = document.querySelector('form');
// let comments = JSON.parse(localStorage.getItem("comments")) || [];


const handleSubmit = (e) => {
    e.preventDefault();

    const commentInput = document.querySelector(".commentInput");
    const commentValue = commentInput.value;

    if(!commentValue) return;

    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    if (!Array.isArray(comments)) {
        comments = [];  // comments가 배열이 아닌 경우 빈 배열로 초기화
    }

    comments.push(commentValue);

    localStorage.setItem("comments",JSON.stringify(comments));

    addCommentList(commentValue);

    commentInput.value = '';
};

formEl.addEventListener("submit", handleSubmit);

const addCommentList = (comment) => {
    const commentList = document.querySelector('.comments');
    const newComment = document.createElement('li');
    
    newComment.innerText = comment;
    commentList.append(newComment);
};



window.onload = () => {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => addCommentList(comment));
};


