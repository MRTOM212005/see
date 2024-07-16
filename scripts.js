function submitComment() {
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() === '') {
        alert('Vui lòng nhập bình luận của bạn.');
        return;
    }

    const commentContainer = document.getElementById('comments');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.textContent = commentText;

    commentContainer.appendChild(newComment);
    document.getElementById('commentText').value = '';
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}
