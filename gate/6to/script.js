// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('video');

// Expose player so it can be used from the console
window.player = player;

// the question answaer
const questions = [
	{
		'question': [
            { answer: 'D' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'C' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'C' },
            { answer: 'B' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU2 = [
	{
		'question': [
            { answer: 'D' },
            { answer: 'C' },
            { answer: 'C' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'B' },
            { answer: 'B' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU3 = [
	{
		'question': [
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'B' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'B' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU4 = [
	{
		'question': [
            { answer: 'B' },
            { answer: 'D' },
            { answer: 'C' },
            { answer: 'C' },
            { answer: 'B' },
            { answer: 'B' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'C' },
            { answer: 'C' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];

const questionsU5 = [
	{
		'question': [
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'C' },
            { answer: 'B' },
            { answer: 'D' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'D' },
            { answer: 'A' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU6 = [
	{
		'question': [
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'D' },
            { answer: 'C' },
            { answer: 'D' },
            { answer: 'D' },
            { answer: 'B' },
            { answer: 'B' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU7 = [
	{
		'question': [
            { answer: 'B' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'C' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU8 = [
	{
		'question': [
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'A' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU9 = [
	{
		'question': [
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'C' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'A' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU10 = [
	{
		'question': [
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'B' },
            { answer: 'C' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU11 = [
	{
		'question': [
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'C' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];
const questionsU12 = [
	{
		'question': [
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'B' },
            { answer: 'C' },
            { answer: 'B' },
            { answer: 'A' },
            { answer: 'C' },
            { answer: 'A' },
            { answer: 'C' },
		],
		'questionText': [
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
			{optionA: "A", optionB: "B", optionC:'C', optionD: 'D'},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
];

function getQuestionFromUnit(){
    var level = $("#testUnit").val();
    var myQuestions = questions;
    if(level == 1)
      myQuestions = questions;  
    if(level == 2)
      myQuestions = questionsU2;
    if(level == 3)
      myQuestions = questionsU3;
    if(level == 4)
      myQuestions = questionsU4;
    if(level == 5)
      myQuestions = questionsU5;
    if(level == 6)
      myQuestions = questionsU6;
    if(level == 7)
      myQuestions = questionsU7;
    if(level == 8)
      myQuestions = questionsU8;
    if(level == 9)
      myQuestions = questionsU9;
    if(level == 10)
      myQuestions = questionsU10;
    if(level == 11)
      myQuestions = questionsU11;
    if(level == 12)
	  myQuestions = questionsU12;
    return myQuestions
}

function setStyleOptionAnswer(el, color) {
	color = typeof color === "undefined" ? "black" : color;
	el.style.color = color;
}

function checkAnswer() {
    var myQuestion = getQuestionFromUnit()[0].question;
	for(const [i, v] of myQuestion.entries()) {
		var divWrapper = document.querySelector(`input[name="option_answer_${i+1}"]`).closest('.choices');
		var optionAnswer = document.querySelector(`input[name="option_answer_${i+1}"]:checked`);
		
		setStyleOptionAnswer(divWrapper, "red");
		if(optionAnswer) {
			if(optionAnswer.checked) {
				if(optionAnswer.value == v.answer) setStyleOptionAnswer(divWrapper, "green");
			}	
		}
	}
}

function getAnswer() {
    var myQuestion = getQuestionFromUnit()[0].question;
	for(const [i, v] of myQuestion.entries()) {
		let optionAnswer = document.querySelectorAll(`input[name="option_answer_${i+1}"]`);
		for(opt of optionAnswer) {
			let divWrapper = opt.closest('.choices');
			setStyleOptionAnswer(divWrapper);
			if(opt.value == v.answer) opt.checked = true;
		}
	}
} 

function generateQuestionAnswer() {
    let divQuestionAnswer = document.querySelector('#div-question_answer');
    var myQuestion = getQuestionFromUnit()[0];
    for(const [i, v] of myQuestion.question.entries()) {
        divQuestionAnswer.innerHTML = divQuestionAnswer.innerHTML
                                    + `<div class="choices">
                                        <div>
                                        <p>${i+1 + ":"}</p>
                                        </div>
                                        <div>
                                            <label class="container">${myQuestion.questionText[i].optionA}
                                                <input type="radio" name="option_answer_${i+1}" class="option-answer" value="A">
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="container">${myQuestion.questionText[i].optionB}
                                                <input type="radio" name="option_answer_${i+1}" class="option-answer" value="B">
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="container">${myQuestion.questionText[i].optionC}
                                                <input type="radio" name="option_answer_${i+1}" class="option-answer" value="C">
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="container">${myQuestion.questionText[i].optionD}
                                                <input type="radio" name="option_answer_${i+1}" class="option-answer" value="D">
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>`;
    }
}

setTimeout(function(){
	generateQuestionAnswer();
	// set up video image and link
    var video = document.getElementById('myVideoTag');
	var sources = video.getElementsByTagName('source');
	video.setAttribute("poster",getQuestionFromUnit()[0].video.cover);
    sources[0].src = getQuestionFromUnit()[0].video.src;
    video.load();
},301);