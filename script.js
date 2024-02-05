const allBlogs = document.getElementById('container-blogs')

const addBlog  = function(){
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    const blogTitle = document.createElement('h1')
    blogTitle.className = 'blogTitle'
    blogTitle.textContent = 'Astronomy is fire!!'

    const message = document.createElement('p')
    message.className = 'message'
    message.textContent = 'There is a new Discovery of planet right now'

    wrapper.appendChild(blogTitle);
    wrapper.appendChild(message);

            // Append the wrapper to the container
    allBlogs.appendChild(wrapper);
}
addBlog()
