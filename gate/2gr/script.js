const questions = [ 
    {
      'question': " " + 
      "<p class='sentence'> I <span>am</span>.</p>" +
      "<p class='sentence'> You <span>are</span>.</p>" +
      "<p class='sentence'> They <span>are</span>.</p>" +
      "<p class='sentence'> We <span>are</span>.</p>" +
      "<p class='sentence'> He <span>is</span>.</p>" +
      "<p class='sentence'> She <span>is</span>.</p>" +
      "<p class='sentence'> It <span>is</span>.</p>" +
      "<p class='sentence'> The cars <span>are</span>.</p>" +
      "<p class='sentence'> Sara and Jack <span>are</span>.</p>" +
      "<p class='sentence'> The people <span>are</span>.</p>" +
      "<p class='sentence'> The dogs <span>are</span>.</p>" +
      "<p class='sentence'> The water <span>are</span>.</p>" +
      "<p class='sentence'> My uncle <span>is</span>.</p>" +
      "<p class='sentence'> March <span>is</span>.</p>" +
      "<p class='sentence'> Today <span>is</span>.</p>" +
      "<p class='sentence'> These books <span>are</span>.</p>" +
      "<p class='sentence'> The weather <span>is</span>.</p>" +
      "<p class='sentence'> Where <span>are</span> you from?</p>" +
      "<p class='sentence'> We <span>are</span> from Thailand.</p>" +
      "<p class='sentence'> <span>Are</span> Julia and Sara students?</p>" +
      "<p class='sentence'> No, they are <span>not</span>. They/'re teachers.</p>" +
      "<p class='sentence'> They're <span>are</span>from Thailand.</p>" +
      "<p class='sentence'> <span>Is</span>Sam a teacher too?</p>" +
      "<p class='sentence'> Yes, he <span>is</span>.</p>" +
      "<p class='sentence'> How old <span>is</span>he?</p>" +
      "<p class='sentence'> He <span>is</span>49 years old.</p>" +
      "<p class='sentence'> Where <span>is</span>his home? It is in Bangkok.</p>" +
      "<p class='sentence'> My brother <span>is</span>a student.</p>" +
      "<p class='sentence'> He <span>is</span>18 years old.</p>" +
      "<p class='sentence'> He <span>is</span>at school now.</p>" +   
      "<p class='sentence'> Lily <span>is</span> a student too.</p>" +
      "<p class='sentence'> She <span>is</span>20 years old.</p>" +
      "<p class='sentence'> John and Julie <span>are</span>doctors.</p>" +
      "<p class='sentence'> They <span>are</span>at the hospital now.</p>" +
      "<p class='sentence'> This lesson <span>is</span>fun.</p>"
    }
];

const questionsU2 =[ 
    {
        'question': " " + 
        "<p class='sentence'> Mimi works in Bangkok, but she <span>lives</span> in Chonburi. </p>" +
        "<p class='sentence'> Julia and I <span>go</span> to Thamasat University.</p>" +
        "<p class='sentence'> John   and Robert <span>are</span> doctors. </p>" +
        "<p class='sentence'> Sam is a teacher, I <span>think</span> his job is interesting!</p>" +
        "<p class='sentence'> Julie is a nurse. She <span>does</span> not work in an office. </p>" +
        "<p class='sentence'> Mark is a student. He <span>goes</span> to Ramkhamhaeng University.</p>" +
        "<p class='sentence'> Danny is a pilot. He <span>works</span> for Thai Airlines. </p>" +
        "<p class='sentence'> What <span>does</span> Julia do?  She is a teacher.</p>" +
        "<p class='sentence'> <span>Does</span> she teach    English at PEI? </p>" +
        "<p class='sentence'> Yes, she <span>does</span>. </p>" +
        "<p class='sentence'> What <span>do</span> you do? </p>" +
        "<p class='sentence'> I <span>am</span> a student.</p>" +
        "<p class='sentence'> Where <span>do</span> you live? </p>" +
        "<p class='sentence'> I live with my parents <span>in</span> Bangkok.</p>" +
        "<p class='sentence'> <span>Do</span> you have any brothers or sisters? </p>" +
        "<p class='sentence'> Yes, I <span>do</span>. </p>" +
        "<p class='sentence'> I <span>have</span> a brother.</p>" +
        "<p class='sentence'> <span>When</span> is your birthday? </p>" +
        "<p class='sentence'> It's <span>on</span> March/24th. </p>" +
        "<p class='sentence'> How <span>old</span> are you?</p>" +
        "<p class='sentence'> I <span>am</span> 23 years old.</p>" +
        "<p class='sentence'> <span>What</span> is your favorite  food? </p>" +
        "<p class='sentence'> My favorite food <span>is</span> Thai food, </p>" +
        "<p class='sentence'> but I <span>like</span> American food too.</p>" +
        "<p class='sentence'> <span>What</span> about you? </p>" +
        "<p class='sentence'> Well, I <span>like</span> American food, </p>" +
        "<p class='sentence'> and sometimes <span>I</span> eat Thai food too.</p>"
    }
];

const questionsU3 =[ 
    {
        'question': " " + 
        "<p class='sentence'> Mimi loves soup, but Sam <span>does</span> n't like it.</p>" +
        "<p class='sentence'> <span>Does</span> he like seafood? </p>" +
        "<p class='sentence'> Yes, he <span>does</span>. His favorite food is seafood. </p>" +
        "<p class='sentence'> He really <span>loves</span> fish. </p>" +
        "<p class='sentence'> What kind of food <span>does</span> Mimi like?</p>" +
        "<p class='sentence'> She <span>likes</span> Thai food. </p>" +
        "<p class='sentence'> <span>Do</span> you and your parents like American food? I like American food,</p>" +
        "<p class='sentence'> but my parents <span>don't</span> like it. </p>" +
        "<p class='sentence'> My sister <span>likes</span> beef, </p>" +
        "<p class='sentence'> but I <span>don't</span> like it.</p>" +
        "<p class='sentence'> Robert and John <span>don't</span>like spicy food, but I love it. </p>" +
        "<p class='sentence'> <span>Do</span> Asians like rice?</p>" +
        "<p class='sentence'> Yes, they <span>do</span>. </p>" +
        "<p class='sentence'> They eat rice every day. Do <span>you</span> usually eat </p>" +
        "<p class='sentence'> garlic <span>with</span> your meal?</p>" +
        "<p class='sentence'> My mother <span>likes</span> garlic, </p>" +
        "<p class='sentence'> but I <span>hate</span> it. </p>" +
        "<p class='sentence'> What about you? What <span>do</span> you usually eat?</p>" +
        "<p class='sentence'> Well, for breakfast, lunch and dinner we <span>eat</span> different kinds </p>" +
        "<p class='sentence'> of <span>food</span>. For breakfast we  usually eat</p>" +
        "<p class='sentence'> bread, cheese, fried eggs, jam <span>and</span> butter. </p>" +
        "<p class='sentence'> For lunch we <span>eat</span> rice with some meat.</p>" +
        "<p class='sentence'> We have <span>talk</span>ed alot </p>" +
        "<p class='sentence'> about <span>food</span>, </p>" +
        "<p class='sentence'> so I <span>am</span> hungry now. </p>" +
        "<p class='sentence'> Yeah, Lets <span>get</span> something </p>" +
        "<p class='sentence'> to <span>eat</span>. </p>" +
        "<p class='sentence'> <span>Do</span> you like Thai food? </p>" +
        "<p class='sentence'> Yes, I <span>do</span>. OK. lets go.</p>"
    }
];

const questionsU4 =[ 
    {
        'question': " " + 
        "<p class='sentence'> Julia loves exercising and she's really fit. She loves swimming and she goes swimming <span>every</span> morning,</p>" +
        "<p class='sentence'> from Monday to <span>Sunday</span>. </p>" +
        "<p class='sentence'> She doesn't like to drive so she <span>always</span> walks to work from Monday to Friday. </p>" +
        "<p class='sentence'> After work, she plays tennis <span>twice</span> a week, on Tuesdays and Thursdays.</p>" +
        "<p class='sentence'> And plays basketball <span>three times</span> a week, on Mondays, Wednesdays, and Fridays.</p>" +
        "<p class='sentence'> What does she do on weekends? Well, on weekends she <span>usually</span> relaxes </p>" +
        "<p class='sentence'> and <span>sometimes</span> she does tai chi.</p>" +
        "<p class='sentence'> And <span>sometimes</span> she does yoga. </p>" +
        "<p class='sentence'> But she <span>never</span> goes jogging; She hates jogging.</p>" +
        "<p class='sentence'> What about Lily? She <span>always</span> stays with her parents. </p>" +
        "<p class='sentence'> And <span>sometimes</span> she goes shopping with her dad.</p>" +
        "<p class='sentence'> She <span>never</span> goes outside  alone. </p>" +
        "<p class='sentence'> She <span>usually</span> watches nursery rhymes.</p>" +
        "<p class='sentence'> She doesn't  like to stay home, so she <span>usually</span> says 'Daddy, let's go shopping'.</p>"
    }
];

const questionsU5 =[ 
    {
        'question': " " + 
        "<p class='sentence'> This place is so boring today. Robert is <span>reading</span> a book now. </p>" +
        "<p class='sentence'> He <span>is</span> a good student.</p>" +
        "<p class='sentence'> He studies <span>every</span> day, even on Sundays!  </p>" +
        "<p class='sentence'> And Mark <span>is playing</span> </p>" +
        "<p class='sentence'> football <span>now</span>.</p>" +
        "<p class='sentence'> He <span>plays</span> with his friends every Sunday but he never invites me.</p>" +
        "<p class='sentence'> Danny is a great man. He <span>is</span> working right now. </p>" +
        "<p class='sentence'> He <span>works</span> in a restaurant on weekends.</p>" +
        "<p class='sentence'> Sara <span>is</span> studying English now. </p>" +
        "<p class='sentence'> Susan <span>is</span> reading her English book now.</p>" +
        "<p class='sentence'> What are you doing? We <span>are</span> studying English too.</p>" +
        "<p class='sentence'> Who <span>is</span> teaching English to you now? </p>" +
        "<p class='sentence'> Sam is <span>teach</span>ing English at this time.</p>" +
        "<p class='sentence'> What is Julia <span>doing</span> right now? </p>" +
        "<p class='sentence'> I think she <span>is</span> </p>" +
        "<p class='sentence'> cook <span>ing</span> now.</p>" +
        "<p class='sentence'> I think <span>so</span>. </p>" +
        "<p class='sentence'> She might <span>be</span> enjoying her </p>" +
        "<p class='sentence'> cooking <span>now</span>.</p>" +
        "<p class='sentence'> Oh, I'm late. I have to go now. I'll talk <span>to</span> you later. </p>" +
        "<p class='sentence'> OK, have a great time. See <span>you</span> later. Goodbye.</p>"
    }
];

const questionsU6 =[ 
    {
        'question': " " + 
        "<p class='sentence'> John <span>was</span>n't at work yesterday, </p>" +
        "<p class='sentence'> because his wife <span>was</span> sick.</p>" +
        "<p class='sentence'> We <span>were</span> late because </p>" +
        "<p class='sentence'> our train <span>was</span> late. </p>" +
        "<p class='sentence'> Lily and Sam <span>were</span> on vacation last week in Pattaya!</p>" +
        "<p class='sentence'> Julia <span>wasn't</span> at the gym on Monday. She goes to the gym on Tuesdays.</p>" +
        "<p class='sentence'> The station <span>was</span> crowded, </p>" +
        "<p class='sentence'> so the lines <span>were</span> really long.</p>" +
        "<p class='sentence'> Why <span>were</span>n't you at the party? </p>" +
        "<p class='sentence'> All your friends <span>were</span> there.</p>" +
        "<p class='sentence'> I <span>was</span> at the beach. </p>" +
        "<p class='sentence'> It <span>was</span> a lot of fun.</p>" +
        "<p class='sentence'> Jane and Sara <span>were</span> at home yesterday. </p>" +
        "<p class='sentence'> They <span>were</span>n't  in the class.</p>" +
        "<p class='sentence'> The weather <span>was</span> too hot yesterday, </p>" +
        "<p class='sentence'> so we <span>were</span> n't outside.</p>" +
        "<p class='sentence'> Lily and Jenny <span>were</span> too young 5 years ago.</p>" +
        "<p class='sentence'> If I <span>were</span> younger, I could  play football well.</p>" +
        "<p class='sentence'> You would complete these sentences perfectly, if you <span>were</span> a native English speaker.</p>" +
        "<p class='sentence'> You <span>weren't</span> in the USA yesterday, but John was there.</p>" +
        "<p class='sentence'> If I <span>had</span> enough time, </p>" +
        "<p class='sentence'> I <span>would</span> make lots of great lessons for you to practice. </p>" +
        "<p class='sentence'> I wish I <span>had</span> more free time.</p>"
    }
];

const questionsU7 =[ 
    {
        'question': " " + 
        "<p class='sentence'> What do you and your sister have? Well, we <span>have</span> many things. </p>" +
        "<p class='sentence'> I <span>have</span> a house.</p>" +
        "<p class='sentence'> My sister <span>has</span> an apartment. </p>" +
        "<p class='sentence'> I <span>have</span> a car. </p>" +
        "<p class='sentence'> She also <span>has</span> a car.</p>" +
        "<p class='sentence'> When we were younger, I <span>had</span> a motorcycle </p>" +
        "<p class='sentence'> and she <span>had</span> a bicycle.</p>" +
        "<p class='sentence'> I don't <span>have</span> pets at home now, </p>" +
        "<p class='sentence'> but my sister <span>has</span> 2 cats.</p>" +
        "<p class='sentence'> She likes to <span>have</span> pets. </p>" +
        "<p class='sentence'> She <span>had</span> 2 dogs 3 years ago.</p>" +
        "<p class='sentence'> What about you? What do you <span>have</span>? </p>" +
        "<p class='sentence'> I <span>have</span> a cell phone. </p>" +
        "<p class='sentence'> I <span>have</span> a computer.</p>" +
        "<p class='sentence'> I don't <span>have</span> a car. </p>" +
        "<p class='sentence'> I <span>have</span> 3 brothers. </p>" +
        "<p class='sentence'> They <span>have</span> 5 children.</p>" +
        "<p class='sentence'> What about you? </p>" +
        "<p class='sentence'> Do you <span>have</span> any brothers.</p>" +
        "<p class='sentence'> Yes, I do. I <span>have</span> a brother. </p>" +
        "<p class='sentence'> He <span>has</span> 2 cute daughters.</p>" +
        "<p class='sentence'> My parents <span>have</span> a big house. </p>" +
        "<p class='sentence'> We live together. We <span>have</span> a lot of fun.</p>" +
        "<p class='sentence'> <span>Have</span> you </p>" +
        "<p class='sentence'> <span>had</span> your dinner yet? </p>" +
        "<p class='sentence'> Yes, I <span>have</span> </p>" +
        "<p class='sentence'> <span>had</span> it. How about you?</p>" +
        "<p class='sentence'> I <span>had</span> </p>" +
        "<p class='sentence'> <span>had</span> it before I came to the class.</p>" +
        "<p class='sentence'> Do you usually <span>have</span> dinner before the class? </p>" +
        "<p class='sentence'> Yes, I <span>do</span>. </p>" +
        "<p class='sentence'> I don't like to <span>have</span> dinner too late.</p>"
    }
];

const questionsU8 =[ 
    {
        'question': " " + 
        "<p class='sentence'> I <span>have</span> a classmate her </p>" +
        "<p class='sentence'> name <span>is</span> Julia. </p>" +
        "<p class='sentence'> She <span>is</span> very friendly and smart, </p>" +
        "<p class='sentence'> so I <span>like</span> talking to her.  </p>" +
        "<p class='sentence'> She <span>looks</span> slim and beautiful, </p>" +
        "<p class='sentence'> and she <span>has</span> long brown hair.  </p>" +
        "<p class='sentence'> She also <span>has</span> beautiful brown eyes. </p>" +
        "<p class='sentence'> She <span>looks</span> perfect to me. </p>" +
        "<p class='sentence'> She <span>has</span> a sister, her name  is Amy. </p>" +
        "<p class='sentence'> Amy <span>looks</span> like Julia. </p>" +
        "<p class='sentence'> She <span>looks</span> also beautiful but chubby, </p>" +
        "<p class='sentence'> and she <span>has</span> short curly hair. </p>" +
        "<p class='sentence'> She <span>is</span> a hard working student. </p>" +
        "<p class='sentence'> What <span>is</span> she like? </p>" +
        "<p class='sentence'> She <span>seems</span> kind and outgoing. </p>" +
        "<p class='sentence'> What <span>does</span> Don look like? </p>" +
        "<p class='sentence'> He <span>looks</span> handsome. </p>" +
        "<p class='sentence'> Who <span>does</span> Lily look like? </p>" +
        "<p class='sentence'> She <span>looks</span> </p>" +
        "<p class='sentence'> <span>like</span> her father. </p>" +
        "<p class='sentence'> What <span>does</span> your sister like? </p>" +
        "<p class='sentence'> She <span>likes</span> Thai food. </p>"
    }
];

const questionsU9 =[ 
    {
        'question': " " + 
        "<p class='sentence'> You <span>can</span>see and do so many interesting things in Bangkok. </p>" +
        "<p class='sentence'> For example, you <span>can go</span>to Siam Square, thousands of people go there every day. </p>" +
        "<p class='sentence'> You <span>can walk</span> there </p>" +
        "<p class='sentence'> or you <span>can take</span> a bus  </p>" +
        "<p class='sentence'> or you  <span>can take</span> the BTS. </p>" +
        "<p class='sentence'> From the BTS you <span>can see</span> the amazing skyscrapers in Bangkok.</p>" +
        "<p class='sentence'> After visiting the Siam square and MBK, </p>" +
        "<p class='sentence'> you <span>can take</span> a taxi to Banglampo.There is a wonderful museum there.</p>" +
        "<p class='sentence'> Then you <span>can go</span> to the Kowsan road and relax there for a while. Back in downtown</p>" +
        "<p class='sentence'> you <span>can</span> walk to  Pratunam market. </p>" +
        "<p class='sentence'> You <span>can buy</span> great and cheap gifts there.</p>" +
        "<p class='sentence'> And you <span>can eat</span> at Thai restaurants, if you like Thai food.</p>" +
        "<p class='sentence'> You also  <span>can</span> visit some nightclubs on Silom street, </p>" +
        "<p class='sentence'> <span>if</span> you are interested.</p>" +
        "<p class='sentence'> Or you <span>can travel</span> to the other provinces in Thailand, if you are interested in Thai culture.</p>" +
        "<p class='sentence'> There <span>are</span> many cultural events such as dance, music and lifestyles in Thailand. Thanks a lot. Goodbye.</p>"
    }
];

const questionsU10 =[ 
    {
        'question': " " + 
        "<p class='sentence'> Change lesson type <span>am</span>.</p>"
        
    }
];

const questionsU11 =[ 
    {
        'question': " " + 
        "<p class='sentence'> Hi Jenny, I just got back from my family vacation. We <span>had</span> a great time.</p>" +
        "<p class='sentence'> After a very long flight we <span>arrived</span> in Bangkok. </p>" +
        "<p class='sentence'> Then we <span>transferred</span> to a smaller plane </p>" +
        "<p class='sentence'> and <span>flew</span> to Samui Island. </p>" +
        "<p class='sentence'> The long flight <span>was</span> worth it. Samui is a beautiful island</p>" +
        "<p class='sentence'> in the Gulf of Thailand. We  <span>did</span> lots of fun things. </p>" +
        "<p class='sentence'> We <span>swam</span> in the ocean.</p>" +
        "<p class='sentence'> We also <span>climbed</span> a mountain </p>" +
        "<p class='sentence'> and <span>walked</span> in the forest. In  the evenings,</p>" +
        "<p class='sentence'> we relaxed on the beach and <span>took</span> lots  of pictures. </p>" +
        "<p class='sentence'> I <span>sent</span> you some of them.</p>" +
        "<p class='sentence'> <span>Did</span> you get them? After three days relaxing in  Samui Island</p>" +
        "<p class='sentence'> we <span>took</span> a ferry boat to Pattaya city. </p>" +
        "<p class='sentence'> In Pataya also we <span>had</span> fun.</p>" +
        "<p class='sentence'> In the nights we <span>went</span> to Walking Street, </p>" +
        "<p class='sentence'> it's amazing. We <span>ate</span> a lot of</p>" +
        "<p class='sentence'> fresh seafood. Yesterday we <span>went</span> to the Sunset Garden. It's really beautiful.</p>" +
        "<p class='sentence'> Tomorrow we <span>are</span> going </p>" +
        "<p class='sentence'> to <span>go</span> to Bangkok again. See you soon.</p>"
    }
];

const questionsU12 =[ 
    {
        'question': " " + 
        "<p class='sentence'> All my friends are going to move away after graduation. </p>" +
        "<p class='sentence'> Lily <span>is going to go</span> to a medical school in China.</p>" +
        "<p class='sentence'> Amy <span>is going to</span> go to a great drama school in Chiangmai. </p>" +
        "<p class='sentence'> She <span>is going to be</span> an actress soon. </p>" +
        "<p class='sentence'> Don <span>is going to work</span> in a bank in Phuket. </p>" +
        "<p class='sentence'> He's <span>going to rent</span> an apartment there next week.</p>" +
        "<p class='sentence'> Nanny and Julie <span>are going to study</span> English at PEI. </p>" +
        "<p class='sentence'> If they take a course there, they <span>will</span> speak English well.</p>" +
        "<p class='sentence'> Then they <span>are going to go</span> to a business school in Canada. </p>" +
        "<p class='sentence'> They <span>will</span> have a great business after graduation.</p>" +
        "<p class='sentence'> Then they <span>will</span> make a lot of money. </p>" +
        "<p class='sentence'> So we <span>are going to</span> make a party this evening.</p>" +
        "<p class='sentence'> After the party I am going to <span>travel</span> in Europe for two weeks. </p>" +
        "<p class='sentence'> First, I <span>am going to go</span> to  Italy. After that, </p>" +
        "<p class='sentence'> I <span>may</span> go to France or Germany. </p>" +
        "<p class='sentence'> I'm looking forward <span>meeting</span> all my friends again in Bangkok.</p>"
    }
];

function refreshPage(){
    // collecting answers
    $('.sentence').each(function(index) {
        // Accessing answer in span and storing in answer variable
        var answer = $(this).find('span').text();
        
        // sotring each answer in answersArray
        answersArray.push(answer);
        
        // Clearing value in the span tag
        $(this).find('span').empty();
    });
}

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
        // $('#demo').text(answersArray +" , Shuffled: "+ uniqueShuffledAnswersArray);
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

    $()

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