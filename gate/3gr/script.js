const questions = [ 
    {
      'question': " " + 
      "<p class='sentence'> Hello, I'm Sam. What's <span>your</span>name?</p>" +
      "<p class='sentence'> Hello Sam, <span>my</span> name is John.</p>" +
      "<p class='sentence'> Nice to meet <span>you</span> too.</p>" +
      "<p class='sentence'> This is my daughter, <span>her</span>name is  Lily.</p>" +
      "<p class='sentence'> And those <span>are</span> my students.</p>" +
      "<p class='sentence'> <span>Their</span> names are Julia and Lucy. Oh, Who's that  boy over there?</p>" +
      "<p class='sentence'> What's <span>his</span>name?</p>" +
      "<p class='sentence'> That's <span>my</span>friend.</p>" +
      "<p class='sentence'> <span>His</span>name is Jeff.</p>" +
      "<p class='sentence'> <span>He</span>is a teacher.</p>" +
      "<p class='sentence'> Does <span>he</span> live in Bangkok?</p>" +
      "<p class='sentence'> Yes, <span>he</span> does.</p>" +
      "<p class='sentence'> How old <span>is</span> he?</p>" +
      "<p class='sentence'> <span>He</span> is 36 years old.</p>" +
      "<p class='sentence'> Where do <span>his</span> parents live? They live in Canada. What about you?</p>" +
      "<p class='sentence'> What do <span>you</span> do in thailand?</p>" +
      "<p class='sentence'> I <span>am</span> a teacher.</p>" +
      "<p class='sentence'> <span>I</span> teach English at PEI.</p>" +
      "<p class='sentence'> You can visit <span>me</span> at Perfect English School.</p>" +
      "<p class='sentence'> It <span>is</span> at Ramkhamhaeng road, Soi 178.</p>" +
      "<p class='sentence'> I love teaching, so I love <span>my</span> job</p>" +
      "<p class='sentence'> and <span>my</span> students. It was nice talking with you.</p>" +
      "<p class='sentence'> Thank <span>you</span> so much.</p>" +
      "<p class='sentence'> See you again. See <span>you.</span></p>"
    }
];

const questionsU2 = [ 
    {
      'question': " " + 
      "<p class='sentence'> My name is Mark. I <span>am</span> a student.</p>" +
      "<p class='sentence'> I <span>go</span> to Bangkok University.</p>" +
      "<p class='sentence'> I <span>study</span> engineering.</p>" +
      "<p class='sentence'> I <span>live</span> in Bangkok with my parents. My mother is from Roi-et and my father is from Chiang mai.</p>" +
      "<p class='sentence'> They <span>are</span> doctors. They work in a hospital in Bangkok.</p>" +
      "<p class='sentence'> I have a <span>sister</span>. Her name is Julia.</p>" +
      "<p class='sentence'> She <span>is</span> a nurse.</p>" +
      "<p class='sentence'> She doesn't <span>live</span> in Bangkok with us.</p>" +
      "<p class='sentence'> She <span>works</span> in a hospital in Phuket. My parents and my sister like their Jobs.</p>" +
      "<p class='sentence'> I <span>know</span> their jobs are very interesting.</p>" +
      "<p class='sentence'> But I <span>don't</span> want to be  a doctor.</p>" +
      "<p class='sentence'> I <span>want</span> to be an engineer. I study every weekday.</p>" +
      "<p class='sentence'> <span>From</span> </p>" +
      "<p class='sentence'> Monday <span>to</span> Friday.</p>" +
      "<p class='sentence'> I <span>play</span> basketball every evening</p>" +
      "<p class='sentence'> and <span>I</span> really like it.</p>" +
      "<p class='sentence'> My parents <span>have</span> a day off</p>" +
      "<p class='sentence'> <span>on</span> weekends.</p>" +
      "<p class='sentence'> We usually <span>stay</span> home on  Saturdays.</p>" +
      "<p class='sentence'> Sometimes <span>we</span> travel around</p>" +
      "<p class='sentence'> <span>on</span> Sundays but not often.</p>" +
      "<p class='sentence'> On my vacation, I like to <span>go</span> to the beach.</p>"
    }
];

const questionsU3 = [ 
    {
      'question': " " + 
      "<p class='sentence'> Thai food is <span>spicy</span>.</p>" +
      "<p class='sentence'> American food <span>is</span> salty.</p>" +
      "<p class='sentence'> Fried food is <span>greasy</span>.</p>" +
      "<p class='sentence'> The barbecue is <span>delicious</span>.</p>" +
      "<p class='sentence'> The rice soup is <span>smooth</span>.</p>" +
      "<p class='sentence'> The cake is <span>creamy</span>.</p>" +
      "<p class='sentence'> Boiled chicken  is <span>bland</span>.</p>" +
      "<p class='sentence'> The meat is <span>unhealthy</span>.</p>" +
      "<p class='sentence'> The fried pork is <span>greasy</span>.</p>" +
      "<p class='sentence'> The seafood is <span>healthy</span>.</p>" +
      "<p class='sentence'> The soup is <span>smooth</span>.</p>" +
      "<p class='sentence'> The potato chips is <span>crunchy</span>.</p>" +
      "<p class='sentence'> The pizza is <span>tasty</span>.</p>" +
      "<p class='sentence'> The soda is <span>unhealthy</span>.</p>" +
      "<p class='sentence'> The fruits are <span>healthy</span>.</p>" +
      "<p class='sentence'> The vegetables are <span>healthy</span>.</p>" +
      "<p class='sentence'> The water is <span>bland</span>.</p>" +
      "<p class='sentence'> The chocolate is <span>sweet</span>.</p>" +
      "<p class='sentence'> I like <span>healthy</span> food.</p>" +
      "<p class='sentence'> I don't like <span>greasy</span> food.</p>" +
      "<p class='sentence'> My mom likes <span>iced</span> tea.</p>" +
      "<p class='sentence'> My dad likes <span>hot</span> coffee.</p>" +
      "<p class='sentence'> We should eat <span>healthy</span> food.</p>" +
      "<p class='sentence'> We shouldn't eat <span>unhealthy</span> food.</p>" +
      "<p class='sentence'> <span>Sweet</span> food is not good for our health.</p>" +
      "<p class='sentence'> Are there any good restaurants <span>in</span> this neighborhood?</p>" +
      "<p class='sentence'> No, there aren't. But if you want to eat fresh, healthy food you should go to the downtown. And the <span>food</span> at those</p>" +
      "<p class='sentence'> restaurants <span>is</span> quite expensive.</p>"
    }
];

const questionsU4 = [ 
    {
      'question': " " +
      "<p class='sentence'> Do you <span>ever</span> play tennis?</p>" +
      "<p class='sentence'> Yes, I <span>do</span>. It's a great exercise, I love it.</p>" +
      "<p class='sentence'> Really? <span>How often</span> do you play tennis?</p>" +
      "<p class='sentence'> I play tennis <span>every</span> day.</p>" +
      "<p class='sentence'> What about Sara? Does she <span>ever</span> play tennis?</p>" +
      "<p class='sentence'> No. But she does yoga <span>every</span> Saturday</p>" +
      "<p class='sentence'> and <span>sometimes</span> on Sundays too.</p>" +
      "<p class='sentence'> What about Don? Does he <span>ever</span> go jogging?</p>" +
      "<p class='sentence'> Yes, he does. He <span>usually</span> goes jogging in the evenings.</p>" +
      "<p class='sentence'> What about Tom? What does he do to keep fit? He <span>usually</span> plays football</p>" +
      "<p class='sentence'> <span>on</span> Fridays.</p>" +
      "<p class='sentence'> Sam hates exercising so he <span>never</span> goes to the gym.</p>" +
      "<p class='sentence'> But sometimes he walks from his office to the Big C. He <span>usually</span> drives to his office.</p>" +
      "<p class='sentence'> He <span>sometimes</span> goes swimming.</p>" +
      "<p class='sentence'> Most of my friends <span>usually</span> go to the gym in the evenings.</p>" +
      "<p class='sentence'> Do you want to go to the gym with me this weekend? Where do you usually go for workout? There is a great place near my house. I <span>usually</span> go there. Great idea! I'll go with you.</p>"
    }
];

const questionsU5 = [ 
    {
      'question': " " +
      "<p class='sentence'> What time do you usually go to bed? <span>I usually go to the bed</span> at 11 pm.</p>" +
      "<p class='sentence'> What time do you usually get  up? <span>I usually get up</span> at 7 o'clock in the morning.</p>" +
      "<p class='sentence'> What time do you usually eat lunch? <span>I usually eat lunch</span> at noon.</p>" +
      "<p class='sentence'> What time do you wake up? <span>I wake up</span> at 6:30 am.</p>" +
      "<p class='sentence'> What time did he call you yesterday? <span>He called me at</span> 6 o'clock in the evening yesterday.</p>" +
      "<p class='sentence'> What time did she go to bed last night? <span>She went to the bed</span> around 10 pm last night.</p>" +
      "<p class='sentence'> What time will you go home? <span>I will go home after</span> this class.</p>" +
      "<p class='sentence'> What time did you call him last night? <span>I called him at</span> 9:30 last night.</p>" +
      "<p class='sentence'> What time does she usually go home? <span>She usually goes home</span> at 6 pm.</p>" +
      "<p class='sentence'> What time do they wake up? <span>They usually wake up</span> at 7 am.</p>" +
      "<p class='sentence'> What time do they get up? <span>They usually get up</span> at 7:40 am.</p>" +
      "<p class='sentence'> What time will you go shopping? <span>I will go shopping</span> at 3 pm.</p>" +
      "<p class='sentence'> What time will you be at home? <span>I will be at home</span> at 9 pm.</p>"
    }
];

const questionsU6 = [ 
    {
      'question': " " +
      "<p class='sentence'> Hi <span>were</span> you on the beach on Monday?</p>" +
      "<p class='sentence'> No, I <span>wasn't</span>.</p>" +
      "<p class='sentence'> I <span>was</span> in the class.</p>" +
      "<p class='sentence'> <span>Was</span> Susan in the class too?</p>" +
      "<p class='sentence'> Yes, she <span>was</span> there.</p>" +
      "<p class='sentence'> <span>Were</span> Nancy and June at the gym?</p>" +
      "<p class='sentence'> I don't know. I <span>was</span> sick,</p>" +
      "<p class='sentence'> so I <span>wasn't</span> at the gym yesterday.</p>" +
      "<p class='sentence'> Where <span>were</span> you last Sunday night?</p>" +
      "<p class='sentence'> I <span>was</span> at a party. How about you?</p>" +
      "<p class='sentence'> I <span>was</span> at home, doing my homework.</p>" +
      "<p class='sentence'> How about John? He <span>was</span> in Pattaya 3 weeks ago,</p>" +
      "<p class='sentence'> but now he <span>is</span> in Bangkok.</p>" +
      "<p class='sentence'> <span>Was</span> the weather cold yesterday?</p>" +
      "<p class='sentence'> No, it <span>wasn't</span>.</p>" +
      "<p class='sentence'> The sky <span>was</span> clear yesterday,</p>" +
      "<p class='sentence'> so it <span>was</span> sunny and hot in Bangkok.</p>" +
      "<p class='sentence'> I <span>was</span> at the Mall yesterday. I saw Julia.</p>" +
      "<p class='sentence'> She <span>was</span> shopping there.</p>" +
      "<p class='sentence'> Then we <span>were</span> shopping together for 3 hours,</p>" +
      "<p class='sentence'> after that I went back home but she <span>was</span> still shopping.</p>" +
      "<p class='sentence'> There <span>were</span> too many people at the Mall.</p>" +
      "<p class='sentence'> They <span>were</span> enjoying their shopping.</p>" +
      "<p class='sentence'> When I <span>was</span> younger, I used to hang out with friends every Sunday,</p>" +
      "<p class='sentence'> but now I <span>don't</span>.</p>"
    }
];

const questionsU7 = [ 
    {
      'question': " " +
      "<p class='sentence'> 1 <span>one</span>.</p>" +
      "<p class='sentence'> 2 <span>two</span>v.</p>" +
      "<p class='sentence'> 3 <span>three</span>.</p>" +
      "<p class='sentence'> 4 <span>four</span>.</p>" +
      "<p class='sentence'> 5 <span>five</span>.</p>" +
      "<p class='sentence'> 6 <span>six</span>.</p>" +
      "<p class='sentence'> 7 <span>seven</span>.</p>" +
      "<p class='sentence'> 8 <span>eight</span>.</p>" +
      "<p class='sentence'> 9 <span>nine</span>.</p>" +
      "<p class='sentence'> 10 <span>ten</span>.</p>" +
      "<p class='sentence'> 11 <span>eleven</span>.</p>" +
      "<p class='sentence'> 12 <span>twelve</span>.</p>" +
      "<p class='sentence'> 13 <span>thirteen</span>.</p>" +
      "<p class='sentence'> 14 <span>fourteen</span>.</p>" +
      "<p class='sentence'> 15 <span>fifteen</span>.</p>" +
      "<p class='sentence'> 16 <span>sixteen</span>.</p>" +
      "<p class='sentence'> 17 <span>seventeen</span>.</p>" +
      "<p class='sentence'> 18 <span>eighteen</span>.</p>" +
      "<p class='sentence'> 19 <span>nineteen</span>.</p>" +
      "<p class='sentence'> 20 <span>twenty</span>.</p>" +
      "<p class='sentence'> 30 <span>thirty</span>.</p>" +
      "<p class='sentence'> 40 <span>forty</span>.</p>" +
      "<p class='sentence'> 50 <span>fifty</span>.</p>" +
      "<p class='sentence'> 60 <span>sixty</span>.</p>" +
      "<p class='sentence'> 70 <span>seventy</span>.</p>" +
      "<p class='sentence'> 80 <span>eighty</span>.</p>" +
      "<p class='sentence'> 90 <span>ninety</span>.</p>" +
      "<p class='sentence'> 100 <span>one hundred</span>.</p>" +
      "<p class='sentence'> 101: one <span>hundred</span></p>" +
      "<p class='sentence'> and <span>one</span>.</p>" +
      "<p class='sentence'> 1,000 one <span>thousandv</span>.</p>" +
      "<p class='sentence'> 2,000,000 <span>two</span></p>" +
      "<p class='sentence'> <span>million</span>.</p>" +
      "<p class='sentence'> 100,000,000 <span>one</span></p>" +
      "<p class='sentence'> <span>hundred</span></p>" +
      "<p class='sentence'> <span>million</span>.</p>" +
      "<p class='sentence'> 1,000,000,000 <span>one</span></p>" +
      "<p class='sentence'> <span>billion</span>.</p>" +
      "<p class='sentence'> 1,000,000,000,000 <span>one</span></p>" +
      "<p class='sentence'> <span>trillion</span>.</p>" +
      "<p class='sentence'> I wish that, I had one <span>trillion</span> dollars.</p>" +
      "<p class='sentence'> How many fingers do you have on your hands? I have <span>eight</span> fingers on my both hands.</p>"
    }
];

const questionsU8 = [ 
    {
      'question': " " +
      "<p class='sentence'> <span>What does</span> Robert</p>" +
      "<p class='sentence'> <span>look like</span>? Is he tall or short?</p>" +
      "<p class='sentence'> He is tall and <span>looks</span> handsome.</p>" +
      "<p class='sentence'> What's your friend Julie <span>like</span>?</p>" +
      "<p class='sentence'> Is she friendly? She <span>seems</span> very nice and friendly.</p>" +
      "<p class='sentence'> Jack is really handsome. He <span>looks like</span> a movie star.</sentence></p>" +
      "<p class='sentence'> What do Sara and Lucy <span>look like</span>?</p>" +
      "<p class='sentence'> They <span>look</span> beautiful.</p>" +
      "<p class='sentence'> What are Dana and her sister <span>like</span>?</p>" +
      "<p class='sentence'> <span>They are</span> very smart,</p>" +
      "<p class='sentence'>  funny and <span>look</span> pretty too.</p>" +
      "<p class='sentence'> Who do you <span>look like</span>? Your mother or your father?</p>" +
      "<p class='sentence'> I <span>look like my</span> father.</p>" +
      "<p class='sentence'> What are your parents <span>like</span>? Are they kind? Yes, they are.</p>" +
      "<p class='sentence'> What about you? Do you <span>look like</span> your father?</p>" +
      "<p class='sentence'> No, I don't. I <span>look like</span> my mother. Do you have any sisters? Yes, I do.</p>" +
      "<p class='sentence'> Jane <span>is</span> 18 years old</p>" +
      "<p class='sentence'> and Jenny <span>is</span> 16 years old.</p>" +
      
      "<p class='sentence'> What <span>are</span> they like?</p>" +
      "<p class='sentence'> Well, Jenny <span>is</span> friendly, outgoing and smart.</p>" +
      "<p class='sentence'> Jane <span>is</span> Shy, smart and hardworking.</p>"
    }
];

const questionsU9 = [ 
    {
      'question': " " +
      "<p class='sentence'> Where <span>can</span> I go in Thailand? There are many interesting places in Thailand.</p>" +
      "<p class='sentence'> You can go to Pattaya or Chiangmai. How <span>can I get</span> to Pattaya?</p>" +
      "<p class='sentence'> You <span>can</span> get there by bus or by van.</p>" +
      "<p class='sentence'> <span>Can I get</span> there by train? No, there isn't any trains from Bangkok go directly to Pattaya.</p>" +
      "<p class='sentence'> How <span>can I get</span> to chiangmai?</p>" +
      "<p class='sentence'> You <span>can</span> get there by bus, train or plane.</p>" +
      "<p class='sentence'> In Chiangmai you <span>can take</span> a taxi from the airport or the bus station to the downtown.</p>" +
      "<p class='sentence'> Or You <span>can take</span> a taxi there to your hotel.</p>" +
      "<p class='sentence'> <span>Where can I</span> watch Thai boxing  game in Bangkok?</p>" +
      "<p class='sentence'> You <span>can watch</span> Thai boxing game at Lumpini park, it's in downtown.</p>" +
      "<p class='sentence'> Thank you so <span>much</span> for your information.</p>" +
      "<p class='sentence'> You're <span>welcome</span>.</p>" +
      "<p class='sentence'> Goodbye. <span>Goodbye</span>. Have a great time. You too.</p>"
    }
];

const questionsU10 = [ 
    {
      'question': " " +
      "<p class='sentence'> Let's go to a movie. Ok, lets go. <span>Is there</span> a movie theater near you?</p>" +
      "<p class='sentence'> Yes, there is. <span>There is</span> a great movie theater at The Mall Bangkapi.</p>" +
      "<p class='sentence'> <span>Are there</span> any good restaurants at The Mall?</p>" +
      "<p class='sentence'> No, <span>there aren't</span>. But there are lots of Thai restaurants on Latprow road.</p>" +
      "<p class='sentence'> They aren't far from The mall. <span>Is there</span> a bank around here?</p>" +
      "<p class='sentence'> No, I'm sorry, <span>there isn't</span> any.</p>" +
      "<p class='sentence'> But <span>there are</span> some banks at BigC Supermarket.</p>" +
      "<p class='sentence'> What about the gym? <span>Are there</span> any fitness centers around here?</p>" +
      "<p class='sentence'> Yes, <span>there are</span>. There is a place which is called Sport & Spa.</p>" +
      "<p class='sentence'> I'm an English teacher and I'm looking for a job. It's across from Tesco Lotus. <span>Are there</span> any English schools in this neighborhood?</p>" +
      "<p class='sentence'> Yes, <span>there are</span>. Perfect English International is at Soi 178 Ramkhamhaeng R.d.</p>" +
      "<p class='sentence'> It hires English teachers. Sounds great! <span>There are</span> all the things that I need around here. Thank you for your information. You're  welcome.</p>"
      
    }
];

const questionsU11 = [ 
    {
      'question': " " +
      "<p class='sentence'> Where <span>did</span> you go for your last vacation?</p>" +
      "<p class='sentence'> I <span>went</span> to Pattaya.</p>" +
      "<p class='sentence'> I <span>have</span> some friends there.</p>" +
      "<p class='sentence'> So I call <span>ed</span> them and</p>" +
      "<p class='sentence'> they <span>met</span> me at the Jamtian beach.</p>" +
      "<p class='sentence'> We <span>sat</span> on the beach whole day, just talking!</p>" +
      "<p class='sentence'> We <span>talked</span> about so many interesting things for many hours.</p>" +
      "<p class='sentence'> That's why I <span>got</span> sunburn,</p>" +
      "<p class='sentence'> but that <span>was</span> OK,</p>" +
      "<p class='sentence'> because I <span>was</span> with my friends on vacation.</p>" +
      "<p class='sentence'> The next day I <span>took</span> a tour of the Nong Nuch Park.</p>" +
      "<p class='sentence'> There <span>are</span> so many interesting things to see.</p>" +
      "<p class='sentence'> I also <span>ate</span> a lot of really delicious food such as Papaya Salad and barbecue.</p>" +
      "<p class='sentence'> I can't wait to go back. What about you? What <span>did</span> you</p>" +
      "<p class='sentence'>  <span>do</span> on your summer holiday?</p>" +

      "<p class='sentence'> I <span>didn't</span> go anywhere!</p>" +
      "<p class='sentence'> I <span>had</span> too many things</p>" +
      "<p class='sentence'> to <span>do</span> at home.</p>" +

      "<p class='sentence'> I <span>stayed</span> home helping my parents.</p>" +
      "<p class='sentence'> I also <span>did</span> my homework.</p>" +
      "<p class='sentence'> I <span>helped</span> my mom cleaning the house.</p>" +
      "<p class='sentence'> We also <span>had</span> fun together.</p>" +
      "<p class='sentence'> We <span>cooked</span> and</p>" +
      "<p class='sentence'> <span>ate</span> food together.</p>" +

      "<p class='sentence'> I also <span>watched</span> some football games on the TV.</p>"
    }
];

const questionsU12 = [ 
    {
      'question': " " +
      "<p class='sentence'> What are you and Lily <span>going to</span> do this summer?</p>" +
      "<p class='sentence'> We <span>are going to</span> study English at PEI.</p>" +
      "<p class='sentence'> Are Sara and Jack <span>going to play</span> tennis this weekend?</p>" +
      "<p class='sentence'> Yes, <span>they are</span>.</p>" +
      "<p class='sentence'> Where is Sam <span>going to go</span> on his vacation?</p>" +
      "<p class='sentence'> He <span>is going to</span> visit his friends in Canada.</p>" +
      "<p class='sentence'> Is Amy <span>going to</span> start studying this month? No, she isn't.</p>" +
      "<p class='sentence'> She <span>is going to start</span> studying next month. What about John?</p>" +
      "<p class='sentence'> What is <span>he going to</span> do?</p>" +
      "<p class='sentence'> He's <span>going</span> to teach English at PEI next month.</p>" +
      "<p class='sentence'> Then he <span>is going to</span> get married in December.</p>" +
      "<p class='sentence'> <span>Will</span> you go to his wedding party?</p>" +
      "<p class='sentence'> Sure, I <span>will</span>.</p>" +
      "<p class='sentence'> Where is <span>he going to</span> make the party?</p>" +
      "<p class='sentence'> He <span>is going to</span> have the party at his house in Bangkok. Wow, that's great!</p>" +
      "<p class='sentence'> Everything <span>will be</span> prepared for his wedding.</p>" +
      "<p class='sentence'> By the way, I have to <span>go</span> now.</p>" +
      "<p class='sentence'> I'm <span>going to go</span> to the airport at 4 pm this afternoon. OK, have a safe flight. Thank you. Bye.</p>"
    }
];

function getQuestionFromUnit(){
    //var level = $("#testUnit").val();
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

// jQuery JavaScript
(function($) {
    "use strict";
    //LESSON 9 
    var colorRed = "#FF3333",
        borderColorDefault = "gray",
        borderColorRight = "#00ff00",
        borderColorWrong = "#FF3333",
        messageOnUnselectedBlanks = "Again",
        i,
        answersArray = [], 
        selectedAnswersArray = [], 
        shuffledAnswersArray = [], 
        uniqueShuffledAnswersArray = [], 
        optionsHtmlArray = [], 
        optionsHtml = "",
        totalSentences,
        totalUnanswered = 0,
        // get the selected unit question into myQuestion
        myQuestion = null;

    // ON WINDOWS LOAD
    setTimeout(function(){
        $('#message').hide();

        // check if we reload and keep old storage
        if(localStorage.getItem('unit') != null){
          $("#testUnit").val(localStorage.getItem('unit'));
          localStorage.removeItem('unit');
        }

        // put in the question here
        myQuestion = getQuestionFromUnit();
        // Set up the question to front end
        $('.question-section').append(myQuestion[0].question);

        // collecting answers
        $('.sentence').each(function(index) {
            // Accessing answer in span and storing in answer variable
            var answer = $(this).find('span').text();
            // sotring each answer in answersArray
            answersArray.push(answer);
            // Clearing value in the span tag
            $(this).find('span').empty();
        });
        // Filling all values in shuffledAnswersArray before shuffling
        $.each(answersArray, function(index) {
            var answer = answersArray[index];
            shuffledAnswersArray.push(answer);
            totalUnanswered = totalUnanswered + 1;
        });
        // Shuffling All answers within shuffledAnswersArray
        shuffle(shuffledAnswersArray);
        // Removing duplicate answers and storing in uniqueShuffledAnswersArray
        uniqueShuffledAnswersArray = unique(shuffledAnswersArray);
        // Now we have unique answers that we can fill in dropdown for all sentences
    //    $('#demo').text(answersArray +" , Shuffled: "+ uniqueShuffledAnswersArray);
        // Generating Options for dropdown in html form and storing each option on seperate index 
        // Appending all Options in one string
        for (i = 0; i < uniqueShuffledAnswersArray.length; i = i + 1) {
            var optionHtmlString = '<option>'+uniqueShuffledAnswersArray[i]+'</option>';
            optionsHtmlArray.push(optionHtmlString);
            if (i == 0) {
                optionsHtml = '<option></option>';
            }
            optionsHtml = optionsHtml + optionsHtmlArray[i];
        }
        // Generating new dropdown in each span
        $('.sentence').each(function(index) {
            var indexInc = index + 1;
            var dropdownId = 'answer-' + indexInc;
            
            $(this).find('span').append(
                '<select id='+dropdownId+' class="dropdown-answers">' +
                optionsHtml +
                '</select>'
            );
            
        });
    },201);

    // ON CLICK FUNCTIONALITY
    // Check Answers
    $( "#check-answers" ).click(function() {
        // reset values
        totalUnanswered = answersArray.length;
          $('.sentence span select').each(function(index) {
              var indexInc = index + 1;
            // Accessing answer in span and storing in answer variable
            var answer = $(this).find(':selected').text();
            var answerIndex = $(this).find(':selected').index();
//              alert(answer);
            // sotring each answer in answersArray
              this.style.borderColor = borderColorDefault;
              if(answerIndex == 0) {
//                  allAnswersSelected = false;
                   this.style.borderColor = borderColorWrong;
              }
              if(answerIndex != 0) {
                  totalUnanswered = totalUnanswered - 1;
              }
        });
        
        // Check if all options are selected, if yes then set its status to true
        if (totalUnanswered == 0) {
            $('#message').hide();
            
            $('.sentence span select').each(function(index) {
                var indexInc = index + 1;
                // Accessing answer in span and storing in answer variable
                var answer = $(this).find(':selected').text();
                var answerIndex = $(this).find(':selected').index();
//                  alert('selected answer: ' + answer + ', actual answer: '+ answersArray[index]);
                
                // sotring each answer in answersArray
                this.style.borderColor = borderColorDefault;
                if(answer == answersArray[index]) {
                    this.style.borderColor = borderColorRight;
                } else {
                    this.style.borderColor = borderColorWrong;
                }
            });
            
        } else {;
            $('#message').css('color', colorRed);
            $('#message').text(messageOnUnselectedBlanks);
            $('#message').show();
            
        }
        
    });
    $( "#show-answers" ).click(function() {
        $('.sentence span select').each(function(i, el) {
            console.log(answersArray);
            $(el).val(answersArray[i]).change();
            $(el).css('borderColor', borderColorRight);
            $('#message').hide();
        });  
    });

    $( "#tryagain" ).click(function() {
      // create local storage of unit when reloaded
      localStorage.setItem('unit',$("#testUnit").val());
      window.location.reload();   
    });

    // Shuffle Array functions
    function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    
    // Get Unique Array
    function unique(list) {
        var result = [];
        $.each(list, function(i, e) {
            if ($.inArray(e, result) == -1) result.push(e);
        });
        return result;
    }
    
    $('button#grReadText').on("click",function() {
      var level = sessionStorage.getItem('unitIframe');
      var audioName = "u"+level+"Audio";
      if($('#'+audioName).length > 0){
          document.getElementById(audioName).play()
      }
  });
})(jQuery); // End of use strict