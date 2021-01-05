function disablePlayButton(disabled) {
    let divPlayWrapper = document.getElementById('div-player_wrapper');
    divPlayWrapper.style.opacity = '50%';
    if(!disabled) divPlayWrapper.style.opacity = '100%';

    let divPlaySound = document.querySelectorAll('.div-play_sound');
    for(el of divPlaySound) {
        el.disabled = disabled;
    }
}

function playAudio(mode, keyAudio) {
    if(!document.querySelector('#div-listen_both_parts').disabled) {
        disablePlayButton(true);
        keyAudio++;
        let audio = new Audio(audioBothParts[keyAudio].file);
        let textAudio = document.getElementById(`text-audio-${keyAudio}`);
        
        textAudio.style.fontWeight = 'bold';
        textAudio.style.color = 'blue';
        if(keyAudio == audioBothParts.length) return;
        audio.addEventListener('ended', async () => {
            disablePlayButton(false);
            textAudio.style.color = '#000';
            audio.currentTime = 0;
            audio.muted = false;
            await setTimeout(() => {
                console.log('wait for 1200ms');
            }, 1200);
            if(keyAudio < (audioBothParts.length - 1)) await playAudio(mode, keyAudio);
        });

        switch(mode) {
            case 'part-a':
                if((keyAudio + 1) % 2 == 1) {
                    textAudio.style.color = '#fc0b03';
                    audio.muted = true;
                } 
                break;
            case 'part-b':
                if((keyAudio + 1) % 2 == 0) {
                    textAudio.style.color = '#fc0b03';
                    audio.muted = true;
                } 
                break;
        }
        audio.play();
    }
}

// use for getting parameter from url
function getParams(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
}

function getQuestionFromUnit(){
    param = window.location.href;
    var unit = getParams(param).unit;
    var myQuestions = questions;
    if(unit == 1)
      myQuestions = questions;  
    if(unit == 2)
      myQuestions = questionsU2;
    if(unit == 3)
      myQuestions = questionsU3;
    if(unit == 4)
      myQuestions = questionsU4;
    if(unit == 5)
      myQuestions = questionsU5;
    if(unit == 6)
      myQuestions = questionsU6;
    if(unit == 7)
      myQuestions = questionsU7;
    if(unit == 8)
      myQuestions = questionsU8;
    if(unit == 9)
      myQuestions = questionsU9;
    if(unit == 10)
      myQuestions = questionsU10;
    if(unit == 11)
      myQuestions = questionsU11;
    if(unit == 12)
      myQuestions = questionsU12;
    return myQuestions   
}

// Find the question and set the audio and Text
myQuestion = getQuestionFromUnit();
let audioBothParts = myQuestion[0].audioAndText;

window.addEventListener('DOMContentLoaded', (event) => {
    function generateTextAudio() {
        let divTextAudio = document.querySelector('#div-text_audio');
        for(const [i, v] of audioBothParts.entries()) {
            var text = document.createElement("h1");
            text.setAttribute('id', `text-audio-${i}`);
            text.innerHTML = v.text;
            divTextAudio.appendChild(text);
        }
    }
    generateTextAudio();
});