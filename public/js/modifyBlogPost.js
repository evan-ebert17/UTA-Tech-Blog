const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete post');
        }
    }
};

const modifyContentHandler = async (event) => {
    if (event.target.hasAttribute('data-userid')) {
        const idee = event.target.getAttribute('data-userid');
        
        if (response.ok) {
            console.log('hello')
        } else {
            alert('failed to update post')
        }
    }
}

const postArr = document.querySelectorAll('.post')
for (let i = 0; i < postArr.length; i++) {
    const pArri = postArr[i];
    pArri.addEventListener('click', delButtonHandler);
}

const tagArr = document.querySelectorAll('a');
for (let i = 0; i < tagArr.length; i++) {
    const tArri = tagArr[i];
    tArri.addEventListener('click', modifyContentHandler)
}