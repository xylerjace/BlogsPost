document.addEventListener('DOMContentLoaded', function() {
  // This function will be called when the DOM is fully loaded
  getAllBlog(); // Call getAllBlog() here
});

const form = document.getElementById('blogForm');

// Add an event listener to the submit button
form.addEventListener('submit', async function(event) {
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

  // Send a POST request to the server
  const response = await fetch('http://localhost:4000/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Redirect to the index page
  window.location.href = './index.html';
});

// Function to add a new blog entry to the page
function addBlog(title, content, container) {
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const blogTitle = document.createElement('h1');
blogTitle.className = 'blogTitle';
blogTitle.textContent = title;

const message = document.createElement('p');
message.className = 'message';
message.textContent = content;

wrapper.appendChild(blogTitle);
wrapper.appendChild(message);

// Check if container exists before appending
if (container) {
  container.appendChild(wrapper);
} else {
  console.error('Container element is null or undefined');
}
}

// Function to fetch and display all existing blog entries
async function getAllBlog() {

  // Fetch data from the backend
  const response = await fetch('http://localhost:4000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  // Handle the fetched data
  const data = await response.json();
  console.log(data);

  const allBlogs = document.getElementById('container-blogs'); // Define allBlogs here

  data.forEach(blog => {
    const blogTitle = blog.title;
    const blogMessage = blog.message;

    addBlog(blogTitle, blogMessage, allBlogs); // Call addBlog with allBlogs
  });
}
