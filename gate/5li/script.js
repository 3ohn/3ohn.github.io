// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('video');

// Expose player so it can be used from the console
window.player = player;

const questions = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "family", optionB: "familiar"},
			{optionA: "Miss", optionB: "Ms"},
			{optionA: "meat", optionB: "met"},
			{optionA: "forget", optionB: "forgot"},
			{optionA: "waitress", optionB: "waiters"},
			{optionA: "institution", optionB: "institute"},
			{optionA: "driven", optionB: "drove"},
			{optionA: "flew", optionB: "flown"},
			{optionA: "snoker", optionB: "snorkeling"},
			{optionA: "every", optionB: "ever"},
			
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU2 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "are not", optionB: "aren't"},
			{optionA: "move", optionB: "movie"},
			{optionA: "yard", optionB: "your"},
			{optionA: "musician", optionB: "music"},
			{optionA: "songs of love", optionB: "songs for love"},
			{optionA: "dancing", optionB: "the dancer"},
			{optionA: "take it easy", optionB: "take me home"},
			{optionA: "favorite", optionB: "do a favor"},
			{optionA: "formers", optionB: "famous"},
			{optionA: "write", optionB: "right"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU3 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "everythings", optionB: "everything's"},
			{optionA: "do you like", optionB: "would you like"},
			{optionA: "eaten", optionB: "eaten"},
			{optionA: "avoiding", optionB: "avoid"},
			{optionA: "allergic", optionB: "allergy"},
			{optionA: "lazy", optionB: "crazy"},
			{optionA: "delicious", optionB: "dilicious"},
			{optionA: "lose", optionB: "loose"},
			{optionA: "get weight", optionB: "gain weight"},
			{optionA: "use too", optionB: "used to"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU4 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "axcellent", optionB: "accident"},
			{optionA: "safty belt", optionB: "eat belt"},
			{optionA: "string wheel", optionB: "steering wheel"},
			{optionA: "hit a car", optionB: "hate a car"},
			{optionA: "stop sign", optionB: "stop sight"},
			{optionA: "whole", optionB: "hood"},
			{optionA: "headlight", optionB: "highlight"},
			{optionA: "hong", optionB: "hunt"},
			{optionA: "targeting", optionB: "tailgating"},
			{optionA: "horde", optionB: "horn"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU5 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "bride", optionB: "bright"},
			{optionA: "software", optionB: "softer"},
			{optionA: "shape", optionB: "shave"},
			{optionA: "skin care", optionB: "skin car"},
			{optionA: "conditioner", optionB: "conditional"},
			{optionA: "wake up", optionB: "makeup"},
			{optionA: "mascara", optionB: "massage"},
			{optionA: "manicure", optionB: "man cure"},
			{optionA: "her spray", optionB: "hair spray"},
			{optionA: "pet cure", optionB: "pedicure"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU6 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "candy", optionB: "candle"},
			{optionA: "revers", optionB: "reserve"},
			{optionA: "front of desk", optionB: "front desk"},
			{optionA: "cheaper", optionB: "chapter"},
			{optionA: "message", optionB: "massage"},
			{optionA: "who will", optionB: "how will"},
			{optionA: "satisfied", optionB: "satisfy"},
			{optionA: "request", optionB: "required"},
			{optionA: "guess", optionB: "guest"},
			{optionA: "live", optionB: "stay"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU7 = [
	{
		'question': [
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "comfortable", optionB: "cure"},
			{optionA: "cheaper", optionB: "plattering"},
			{optionA: "loser", optionB: "clothes"},
			{optionA: "blues", optionB: "color"},
			{optionA: "comfort", optionB: "colour"},
			{optionA: "cute", optionB: "cloth"},
			{optionA: "wind", optionB: "wild"},
			{optionA: "cheapest", optionB: "warm"},
			{optionA: "blouses", optionB: "looser"},
			{optionA: "flatter", optionB: "warm"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU8 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "calorie", optionB: "gallery"},
			{optionA: "painter", optionB: "painting"},
			{optionA: "scuper", optionB: "sculpture"},
			{optionA: "photograph", optionB: "photos"},
			{optionA: "artist", optionB: "artisan"},
			{optionA: "images", optionB: "photographer"},
			{optionA: "moved", optionB: "move"},
			{optionA: "talent", optionB: "skill"},
			{optionA: "mixed", optionB: "mixture"},
			{optionA: "winner", optionB: "winter"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU9 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "somethings", optionB: "something"},
			{optionA: "want", optionB: "won't"},
			{optionA: "bottom", optionB: "button"},
			{optionA: "unless", optionB: "unlist"},
			{optionA: "silly", optionB: "ceiling"},
			{optionA: "staff", optionB: "stuff"},
			{optionA: "nearly", optionB: "nearby"},
			{optionA: "better", optionB: "butter"},
			{optionA: "easy", optionB: "easily"},
			{optionA: "coast", optionB: "cost"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU10 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "looking to", optionB: "looking for"},
			{optionA: "at the corner", optionB: "on the corner"},
			{optionA: "oven new", optionB: "avenue"},
			{optionA: "turn left", optionB: "turn on lift"},
			{optionA: "fourth", optionB: "four"},
			{optionA: "strength", optionB: "street"},
			{optionA: "scross", optionB: "cross"},
			{optionA: "tourguide", optionB: "tour guy"},
			{optionA: "fun", optionB: "fan"},
			{optionA: "lose", optionB: "rose"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU11 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "be for", optionB: "before"},
			{optionA: "all ways", optionB: "always"},
			{optionA: "weak", optionB: "weeks"},
			{optionA: "funny feeling", optionB: "fun feeling"},
			{optionA: "heard", optionB: "heared"},
			{optionA: "glade", optionB: "glad"},
			{optionA: "shake", optionB: "check"},
			{optionA: "mood", optionB: "moot"},
			{optionA: "stick", optionB: "stuck"},
			{optionA: "vertically", optionB: "actually"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

const questionsU12 = [
	{
		'question': [
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'A' },
			{ answer: 'A' },
			{ answer: 'B' },
			{ answer: 'B' },
		],
		'questionText': [
			{optionA: "for", optionB: "far"},
			{optionA: "bumber", optionB: "bumper"},
			{optionA: "luxurious", optionB: "luxury"},
			{optionA: "hurt", optionB: "heart"},
			{optionA: "spill", optionB: "spell"},
			{optionA: "survivor", optionB: "survived"},
			{optionA: "buckle", optionB: "buccal"},
			{optionA: "shades", optionB: "shapes"},
			{optionA: "unkempt", optionB: "unkind"},
			{optionA: "thought", optionB: "thoughts"},
		],
		'video': {
			'cover' : 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
			'src': 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
		}
	}
]

function getQuestionFromUnit(){
	// var level = $("#testUnit").val();
	var level = sessionStorage.getItem('unitIframe');
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
										<div class="choice-number">
										<p>${i+1 + ":"}</p>
										</div>
											<div class="choiceOneContainer">
													<p>${myQuestion.questionText[i].optionA}</p>
													<input type="radio" name="option_answer_${i+1}" class="option-answer" value="A">
													<span class="checkmark"></span>
												
											</div>
											<div class="choiceTwoContainer">
													<p>${myQuestion.questionText[i].optionB}</p>
													<input type="radio" name="option_answer_${i+1}" class="option-answer" value="B">
													<span class="checkmark"></span>
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