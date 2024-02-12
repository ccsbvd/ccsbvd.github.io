function displayRandomGif(folder) {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = ''; // Clear the previous GIF
    // Assuming you have an array of GIF filenames for each folder
    const gifs = folder === 'yes' ? ['yes1.gif', 'yes2.gif'] : ['no1.gif', 'no2.gif'];
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    const imgPath = `images/${folder}/${randomGif}`;
    const imgElement = document.createElement('img');
    imgElement.src = imgPath;
    gifContainer.appendChild(imgElement);
}

document.getElementById('yes-button').addEventListener('click', () => displayRandomGif('yes'));
document.getElementById('no-button').addEventListener('click', () => displayRandomGif('no'));
