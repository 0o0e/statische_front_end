let smallBoxURL = '#';

function updateSmallBox(content, url) {
    const smallBox = document.getElementById('small-dynamic-box');
    smallBox.innerText = content;
    smallBoxURL = url; 

    smallBox.onclick = function() {
        if (smallBoxURL !== '#') {
            window.location.href = smallBoxURL;
        }
    };
}
