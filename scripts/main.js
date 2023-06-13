var myImage = document.querySelector('img');

document.querySelector('img', id="grimm1").onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'pics/grimm1.png') {
        myImage.setAttribute('src','pics/vader.jpg');
    }
    else {
        myImage.setAttribute('src','pics/grimm1.png');
    }
}



