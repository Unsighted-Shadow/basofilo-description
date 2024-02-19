var currentIndex = 0;
var delayBetweenImages = 5000; // Time gap between each image in milliseconds
var intervalId;

function startReading() {
    readNextAltText();
}

function stopReading() {
    clearTimeout(intervalId);
}

function readNextAltText() {
    var images = document.getElementsByTagName('img');
    if (currentIndex < images.length) {
        var altText = images[currentIndex].alt;
        if (altText && altText.trim() !== '') {
            responsiveVoice.speak(altText, 'Brazilian Portuguese Male', {rate: 1.8});
            currentIndex++;
            // Add a delay before moving to the next alt text
            intervalId = setTimeout(readNextAltText, delayBetweenImages);
        } else {
            currentIndex++; // Move to the next image if alt text is empty
            readNextAltText(); // Continue reading alt text of the next image
        }
    } else {
        currentIndex = 0; // Reset the index to start over
    }
}

// Add event listeners for both click and touch events
document.getElementById('startButton').addEventListener('click', startReading);
document.getElementById('startButton').addEventListener('touchstart', startReading);
document.getElementById('stopButton').addEventListener('click', stopReading);
document.getElementById('stopButton').addEventListener('touchstart', stopReading);
