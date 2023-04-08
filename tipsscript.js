const images = document.querySelectorAll('.image');
images.forEach((image) => {
  image.addEventListener('mouseenter', (event) => {
    const description = event.target.parentNode.querySelector('.description');
    description.style.display = 'block';
  });
  image.addEventListener('mouseleave', (event) => {
    const description = event.target.parentNode.querySelector('.description');
    description.style.display = 'none';
  });
});
