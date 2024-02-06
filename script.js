const allBlogs = document.getElementById('container-blogs')
const submitButton = document.getElementById('submit')

// Add an event listener to the submit button

function addBlog(title,content){
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    const blogTitle = document.createElement('h1')
    blogTitle.className = 'blogTitle'
    blogTitle.textContent = title

    const message = document.createElement('p')
    message.className = 'message'
    message.textContent = content

    wrapper.appendChild(blogTitle);
    wrapper.appendChild(message);

            // Append the wrapper to the container
    allBlogs.appendChild(wrapper);
}
async function getAllBlog(){
   
        // Fetch data from the backend
        const response = await fetch('http://localhost:4000/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Handle the fetched data
        const data = await response.json();
        console.log(data);

        data.forEach(blog =>{
          const blogTitle = blog.title
          const blogMessage = blog.message

          addBlog(blogTitle,blogMessage)
        })

    
}
getAllBlog()

submitButton.addEventListener('click', async function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Assuming you have retrieved the title and content of the new blog from the form fields
  const title = document.getElementById('input-title').value;
  const content = document.getElementById('blog-content').value;

  // Add the new blog
  addBlog(title, content);

  // Prepare the data to be sent to the server
  const formData = {
      title: title,
      message: content
  };
     const response = await fetch('http://localhost:4000/create', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      // Redirect to the index page
      window.location.href = './index.html';
});