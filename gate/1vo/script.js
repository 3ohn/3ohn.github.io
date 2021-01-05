const questions = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU2 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU3 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU4 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU5 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU6 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU7 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU8 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU9 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU10 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU11 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];
const questionsU12 = [
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q1.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': 'red', 'image': 'images/q1_a1.jpg'}, 
      { 'answer': 'correct', 'image': 'images/q1_a2.jpg'},
      { 'answer': '#fff', 'image': 'images/q1_a3.jpg'},
    ],
    'why': 'The green <em class="green">FF</em> and blue <em class="blue">EE</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q2.mp3'),
        'isPlaying': false,
      }
    },
    'answers': [
      { 'answer': '#BA0BAB', 'image': 'images/q2_a1.jpg'}, 
      { 'answer': '#fff', 'image': 'images/q2_a2.jpg'},
      { 'answer': 'correct', 'image': 'images/q2_a3.jpg'},
    ],
    'why': 'The red <em class="red">BA</em> and blue <em class="blue">AB</em> values are the strongest.' 
  },
  {
    'question': { 
      'description': 'correct', 
      'audio': {
        'file': new Audio('audio/q3.mp3'),
        'isPlaying': false,
      }  
    },
    'answers': [
      { 'answer': 'correct', 'image': 'images/q3_a1.jpg'}, 
      { 'answer': '#f54242', 'image': 'images/q3_a2.jpg'},
      { 'answer': '#000000', 'image': 'images/q3_a3.jpg'},
    ],
    'why': 'Only the red value <em class="red">C0</em> is high.' 
  }
];

Vue.component('hexquestion', {
  props: ['q', 'answers'],
  template: `
  <div>
  <pre class="code">{{this.q.description}}</pre>
  <img src="pause-play.svg" width="42" alt="" class="btn-audioplay" @click.prevent="!q.audio.isPlaying ? playQuestion(q.audio) : pauseQuestion(q.audio)">
    {{ this.q.audio.isPlaying ? 'Click' : 'Click' }}
  </img>
</div>
  `,
  methods: {
    playQuestion(item) {
      item.isPlaying = true;
      item.file.play();
      
      item.file.addEventListener('ended', async () => {
        item.isPlaying = false;
        this.$emit('played', true);
      });
    },
    pauseQuestion(item) {
      item.isPlaying = false;
      item.file.pause();
    }
  }
});


Vue.component('answers', {
  props: ['v', 'q', 'answers', 'disabled'],
  data() {
    return {
      answer: '',
      a: [] };

  },
  computed: {
    checked: {
      get() {
        return this.v;
      },
      set(val) {
        this.a = val;
      } } },


  template: `
      <div>
        <div :class="['label-ctnr', disabled.disabledQuestion || disabled.disabledAnswer ? 'disabled': '']"><label :class="[ feedbackClass(item.answer), checkedClass(item.answer)]" v-for="(item, i) in answers">
        <span v-if="disabled.disabledQuestion">
          <span class="span-selected" v-if="isChecked(item.answer)">
            <svg class="svg-correct" v-if="isCorrectChecked(item.answer)" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">  
              <polyline class="path check" fill="none" stroke="#00FF00" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
            <svg class="svg-wrong" v-else version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">  
              <line class="path line" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
              <line class="path line" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>
            </svg>
          </span>
          
          <span class="span-not_selected">
            <svg v-if="!isCorrectChecked(item.answer) && isCorrectAnswer(item.answer)" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">  
              <polyline class="path check" fill="none" stroke="#00FF00" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
          </span>
        </span>
        <input @change="answerChecked" type="radio" :id="item.answer" class="option-answer" :value="item.answer" v-model="checked" :disabled="disabled.disabledQuestion || disabled.disabledAnswer"/><span v-html="itemWithColor(item)"></span></label></div>
        <button v-if="answer" type="button" @click="submitAnswer">Answer</button>
      </div>
  `,
  methods: {
    answerChecked() {
      this.$emit('answered', this.a);
    },
    checkedClass(item) {
      return this.isChecked(item) ? 'checked' : 'not-checked';
    },
    isChecked(item) {
      return item === this.checked;
    },
    isCorrectChecked(item) {
      return item === this.checked && item === this.q.description;
    },
    isCorrectAnswer(item) {
      return item === this.q.description;
    },
    feedbackClass(item) {
      if (!this.disabled) {
        return;
      }
      return item === this.q.description ? 'correct' : 'wrong';
    },
    itemWithColor(item) {
      return `
        <span class="helper">
          <img src="${item.image}" style="width: 350px; height: 350px;">
        </span>`;
    } 
  } 
});

Vue.component('finalresults', {
  props: ['finalpercentage'],
  template: "#finalresults" 
});

new Vue({
  el: '#app',
  data() {
    return {
      currentIndex: 0,
      checkedAnswers: [],
      disabledAnswer: true,
      v: [],
      score: 0,
      questions: [],
      isIdle: true,
      askedForResults: false 
    };
  },
  computed: {
    total() {
      return this.questions.length;
    },
    finalPercentage() {
      return `${Math.round(this.score / this.total * 100)}%`;
    },
    question() {
      return this.questions[this.currentIndex].question;
    },
    answer() {
      return this.questions[this.currentIndex].answer;
    },
    why() {
      return this.questions[this.currentIndex].why || '';
    },
    answers() {
      return this.questions[this.currentIndex].answers.sort(function (a, b) {return 0.5 - Math.random();});
    },
    audio() {
      return this.questions[this.currentIndex].audio;
    },
    isAnswered() {
      return this.v.length !== 0;
    },
    disabled() {
      return this.v.length !== 0;
    },
    isFinished() {
      return this.currentIndex === this.total - 1;
    },
    shouldShowNext() {
      return this.isAnswered && !this.isFinished;
    },
    allDone() {
      return this.isAnswered && this.isFinished;
    }, 
  },

  methods: {
    start() {
      // we will get the question based on the level that we send from origin to iframe
      this.questions = this.getQuestionByValue();
      
      this.isIdle = false;
      console.log(this.disabledAnswer);
    },
    shuffle() {
      this.questions = questions.sort(function (a, b) {return 0.5 - Math.random();});
    },
    setAnswerDisable(isPlayedQuestion) {
      if(isPlayedQuestion) this.disabledAnswer = false;
      console.log(this.disabledAnswer);
    },
    go(r) {
      this.v = r;
      this.addToScore();
      this.disabled = true;
      this.isAnswered = true;
    },
    addToScore() {
      if (this.checkAnswer()) {
        this.score++;
      }
    },
    checkAnswer() {
      console.log(this.v, this.questions[this.currentIndex].question.description, this.v === this.questions[this.currentIndex].question.description);
      return this.v === this.questions[this.currentIndex].question.description;
    },
    resetStep() {
      this.isAnswered = false;
      this.disabled = false;
      this.v = [];
      this.disabledAnswer = true;
    },
    displayNext() {
      this.currentIndex++;
      this.resetStep();
    },
    playAgain() {
      this.score = 0;
      this.start();
      this.currentIndex = 0;
      this.askedForResults = false;
      this.resetStep();
    },
    showResults() {
      this.askedForResults = true;
    },
    getQuestionByValue() {
      var level = $("#testUnit").val();
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
  } 
});