const formEl = document.querySelector('form');
const commentInput = document.querySelector('.commentInput');
const commentList = document.querySelector('.commentsList');

let comments = JSON.parse(localStorage.getItem("comments")) || [];

const addComment = (comment) => {
    const commentEl = document.createElement('li');
    commentEl.innerText = comment;
    commentList.append(commentEl);
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
};

formEl.addEventListener("submit", handleSubmit);










// const formEl = document.querySelector('form');
// const commentInput = document.querySelector('.commentInput');
// const commentList = document.querySelector('.commentsList');

// let comments = JSON.parse(localStorage.getItem("comments")) || [];

// // 댓글을 화면에 추가하고 삭제 버튼도 함께 추가
// const addComment = (comment, index) => {
//     const commentEl = document.createElement('li');
//     commentEl.innerText = comment;

//     // 삭제 버튼 생성
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText = '삭제';
//     deleteBtn.style.marginLeft = '10px';

//     // 삭제 버튼 클릭 시 해당 댓글 삭제
//     deleteBtn.addEventListener('click', () => {
//         comments.splice(index, 1); // 배열에서 해당 댓글 삭제
//         localStorage.setItem("comments", JSON.stringify(comments)); // 업데이트된 배열을 localStorage에 저장
//         renderComments(); // 댓글 리스트 다시 렌더링
//     });

//     commentEl.append(deleteBtn); // 댓글 요소에 삭제 버튼 추가
//     commentList.append(commentEl); // 댓글 리스트에 추가
// };

// // 댓글 리스트를 새로 렌더링하는 함수
// const renderComments = () => {
//     commentList.innerHTML = ''; // 기존 댓글 리스트 초기화
//     comments.forEach((comment, index) => addComment(comment, index)); // 새롭게 댓글 목록 생성
// };

// // 초기 렌더링: 페이지 로드 시 기존 댓글들을 화면에 표시
// renderComments();

// const handleSubmit = (e) => {
//     e.preventDefault();

//     const inputValue = commentInput.value.trim();
//     if (!inputValue) return;

//     comments.push(inputValue);
//     localStorage.setItem("comments", JSON.stringify(comments));

//     renderComments(); // 댓글 리스트 다시 렌더링
//     commentInput.value = "";
// };

// formEl.addEventListener("submit", handleSubmit);

