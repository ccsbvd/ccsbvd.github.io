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
    imgElement.className = 'gif-image'; // Add a class name to target with CSS
    gifContainer.appendChild(imgElement);
}





document.getElementById('yes-button').addEventListener('click', function() {
    displayRandomGif('yes', maxYes);
    displayRandomHearts();
});

function displayRandomHearts() {
    // Determine how many hearts to display
    const count = getRandomInt(10, 30);
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('img');
        heart.src = `images/heart${getRandomInt(1, 6)}.png`; // Assuming you have 3 heart images
        heart.className = 'heart';
        
        // Random position within the viewport
        heart.style.left = `${getRandomInt(0, window.innerWidth - 30)}px`;
        heart.style.top = `${getRandomInt(0, window.innerHeight - 30)}px`;
        
        document.body.appendChild(heart);
        
        // Optional: Remove hearts after a certain time
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 3000); // Adjust time as needed
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}




document.getElementById('no-button').addEventListener('click', () => displayRandomGif('no', maxNo));
