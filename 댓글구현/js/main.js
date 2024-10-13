const loadComments = () => {
    const storageComments = localStorage.getItem("comments");
    if(storageComments){
        const commentList = document.querySelector(".comments");
        const comments = JSON.parse(storageComments); //문자열을 객체로 변환

        for(let i = 0; i < comments.length; i++){
            const newComment = document.createElement('li');
            newComment.innerText = comments[i];
            commentList.appendChild(newComment);
        }
    }
}

const saveComment = (comment) => {
    const storageComments = localStorage.getItem("comments");
    let comments = storageComments ? JSON.parse(storageComments) : [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    // console.log("Saved comments: ", localStorage.getItem("comments"));
}

const submitBtn = document.querySelector(".submitButton");

const handleClick = () => {
    const commentInput = document.querySelector(".commentInput");
    const commentList = document.querySelector(".comments");

    const newCommentText = commentInput.value.trim();

    if(newCommentText !== ""){
        const newComment = document.createElement("li");
        newComment.innerText = newCommentText;

        commentList.appendChild(newComment);
        saveComment(newCommentText);
        commentInput.value = "";

    }
};

submitBtn.addEventListener("click", handleClick);

window.onload = () => {
    loadComments();
}



