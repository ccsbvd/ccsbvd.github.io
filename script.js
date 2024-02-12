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

document.getElementById('yes-button').addEventListener('click', function() {
    displayRandomGif('yes', maxYes);
    triggerConfetti(); // Call confetti function
});

function triggerConfetti() {
    confetti({
        particleCount: 150,
        angle: 60,
        spread: 55,
        origin: { y: 0.6 },
        colors: ['#ff1493', '#ff69b4', '#ffb6c1'], // Various shades of pink
        shapes: ['circle', 'square'], // Standard shapes; 'canvas-confetti' does not support custom shapes like hearts
        decay: 0.9,
        scalar: 1.2
    });
    confetti({
        particleCount: 150,
        angle: 120,
        spread: 55,
        origin: { y: 0.6 },
        colors: ['#ff1493', '#ff69b4', '#ffb6c1'], // Matching the color scheme for a cohesive look
        shapes: ['circle', 'square'],
        decay: 0.9,
        scalar: 1.2
    });
}


document.getElementById('no-button').addEventListener('click', () => displayRandomGif('no', maxNo));
