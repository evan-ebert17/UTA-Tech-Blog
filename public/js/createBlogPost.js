const createPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
    if (title && body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json()
      console.log(data)
  
    //   if (response.ok) {
    //     // If successful, redirect the browser to the home page
    //     setTimeout(() => {
    //       document.location.replace('/');
    //     }, 1000) 
       
      //} else {
        //alert(response.statusText);
     // }
    }
  };
  
  document
    .querySelector('.create-post')
    .addEventListener('click', createPostHandler);
  