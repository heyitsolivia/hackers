var MOVIE_PHRASES = [
    'U HAVE TREAD<br>UPON MY DOMAIN &<br>MUST NOW SUFFER<br>WHO R U ?',
    'ACID BURN<br>SEZ LEAVE B 4<br>U R EXPUNGED',
    'I WILL<br>SWAT U LIKE<br>THE FLY U R',
    'I WILL<br>SNAP YOUR BACK<br>LIKE A TOOTHPICK',
    'YOU ARE<br>TERMINATED',
    ''
];

var phraseCounter = 0;

var visibleLength = 10000;
var hiddenLength = 2000;

function changePhrase() {
    var p = document.getElementById('hackertext');
    p.innerHTML = ''
    window.setTimeout(setNextPhrase, hiddenLength);
};

function setNextPhrase() {
    var p = document.getElementById('hackertext');
    var phraseCount = MOVIE_PHRASES.length;
    p.innerHTML = MOVIE_PHRASES[phraseCounter % phraseCount];
    phraseCounter = phraseCounter + 1;
}

window.setInterval(changePhrase, visibleLength + hiddenLength);
setNextPhrase();