// Specify the maximum number of images for each category
const maxYes = 11; // Update this number as you add more 'yes' images
const maxNo = 10; // Update this number as you add more 'no' images

function getRandomImageSrc(folder, max) {
    const randomNumber = Math.floor(Math.random() * max) + 1; // Random number between 1 and max
    return `images/${folder}/${folder}${randomNumber}.gif`;
}

function displayRandomGif(folder, max) {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = ''; // Clear the previous GIF
    const imgSrc = getRandomImageSrc(folder, max);
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    gifContainer.appendChild(imgElement);
}

document.getElementById('yes-button').addEventListener('click', () => displayRandomGif('yes', maxYes));
document.getElementById('no-button').addEventListener('click', () => displayRandomGif('no', maxNo));
