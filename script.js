// JavaScript to toggle project descriptions when the title is clicked
const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(title => {
  title.addEventListener('click', () => {
    const description = title.nextElementSibling; // Get the next <p> element
    // Toggle the 'show' class on the description to control visibility
    description.classList.toggle('show');
  });
});
