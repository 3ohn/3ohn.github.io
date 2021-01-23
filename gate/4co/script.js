function getQuestionFromUnit() {
    //var level = $("#testUnit").val();
    var level = sessionStorage.getItem('unitIframe');
    var myQuestions = questions;
    if (level == 1)
        myQuestions = questions;
    if (level == 2)
        myQuestions = questionsU2;
    if (level == 3)
        myQuestions = questionsU3;
    if (level == 4)
        myQuestions = questionsU4;
    if (level == 5)
        myQuestions = questionsU5;
    if (level == 6)
        myQuestions = questionsU6;
    if (level == 7)
        myQuestions = questionsU7;
    if (level == 8)
        myQuestions = questionsU8;
    if (level == 9)
        myQuestions = questionsU9;
    if (level == 10)
        myQuestions = questionsU10;
    if (level == 11)
        myQuestions = questionsU11;
    if (level == 12)
        myQuestions = questionsU12;
    return myQuestions
}


// jQuery JavaScript
(function ($) {
    "use strict";
    //LESSON 9 
    var colorRed = "#FF3333",
        borderColorDefault = "gray",
        borderColorRight = "#00ff00",
        borderColorWrong = "#FF3333",
        messageOnUnselectedBlanks = "Please fill all blanks",
        i,
        answersArray = [],
        selectedAnswersArray = [],
        array_1 = [],
        array_2 = [],
        array_3 = [],
        array_4 = [],
        allCheckAns = false,
        shuffledAnswersArray = [],
        uniqueShuffledAnswersArray = [],
        uniqueShuffledAnswersArray_2 = [],
        uniqueShuffledAnswersArray_3 = [],
        uniqueShuffledAnswersArray_4 = [],
        arr = [],
        removedele = [],
        optionsHtmlArray = [],
        optionsHtml = "",
        totalSentences,
        totalUnanswered = 0,
        myQuestion = null;
    // ON WINDOWS LOAD
    setTimeout(function () {
        $('#message').hide();

        // put in the question here
        myQuestion = getQuestionFromUnit();
        // Set up the question to front end
        $('.question-section').append(myQuestion[0].question);

        // collecting answers
        $('.sentence').each(function (index) {
            // Accessing answer in span and storing in answer variable
            var answer = $(this).find('span').text();

            // sotring each answer in answersArray
            answersArray.push(answer);

            // Clearing value in the span tag
            $(this).find('span').empty();
        });
        // Filling all values in shuffledAnswersArray before shuffling
        $.each(answersArray, function (index) {
            var answer = answersArray[index];
            shuffledAnswersArray.push(answer);
            totalUnanswered = totalUnanswered + 1;
        });
        // Shuffling All answers within shuffledAnswersArray
        // shuffle(shuffledAnswersArray);
        // Removing duplicate answers and storing in uniqueShuffledAnswersArray
        uniqueShuffledAnswersArray = unique(shuffledAnswersArray);
        uniqueShuffledAnswersArray_2 = unique(shuffledAnswersArray);
        uniqueShuffledAnswersArray_3 = unique(shuffledAnswersArray);
        uniqueShuffledAnswersArray_4 = unique(shuffledAnswersArray);
        // Now we have unique answers that we can fill in dropdown for all sentences
        //    $('#demo').text(answersArray +" , Shuffled: "+ uniqueShuffledAnswersArray);
        // Generating Options for dropdown in html form and storing each option on seperate index 
        // Appending all Options in one string

        // for (i = 0; i < uniqueShuffledAnswersArray.length - 1; i = i + 1) {
        //     var optionHtmlString = '<option>' + uniqueShuffledAnswersArray[i] + '</option>';
        //
        //     optionsHtmlArray.push(optionHtmlString);
        //     // optionsHtmlArray.pop()
        //     if (i == 0) {
        //         optionsHtml = '<option></option>';
        //     }
        //
        //
        //     optionsHtml = optionsHtml + optionsHtmlArray[i];
        // }


        // Generating new dropdown in each span
        $('.sentence').each(function (index) {
            var indexInc = index + 1;
            var dropdownId = 'answer-' + indexInc;
            arr = uniqueShuffledAnswersArray;

            if (indexInc === 1) {
                array_1.push(arr[0], arr[4], arr[5])
                shuffle(array_1)
                let html = "";
                html += ("<option></option>")
                for (i = 0; i <= array_1.length; i++) {
                    if (array_1[i]) {
                        html += ("<option>" + array_1[i] + "</option>");
                    }
                }

                $(this).find('span').append(
                    '<select id=' + dropdownId + ' class="dropdown-answers">' +
                    html +
                    '</select>'
                );
            }

            if (indexInc === 2) {
                array_2.push(uniqueShuffledAnswersArray_2[1], uniqueShuffledAnswersArray_2[6], uniqueShuffledAnswersArray_2[7])
                shuffle(array_2)
                let html = "";
                html += ("<option></option>")
                for (i = 0; i <= array_2.length; i++) {
                    if (array_2[i]) {
                        html += ("<option>" + array_2[i] + "</option>");
                    }
                }

                $(this).find('span').append(
                    '<select id=' + dropdownId + ' class="dropdown-answers">' +
                    html +
                    '</select>'
                );
            }

            if (indexInc === 3) {
                array_3.push(uniqueShuffledAnswersArray_3[2], uniqueShuffledAnswersArray_3[8], uniqueShuffledAnswersArray_3[9])
                shuffle(array_3)
                let html = "";
                html += ("<option></option>")
                for (i = 0; i <= array_3.length; i++) {
                    if (array_3[i]) {
                        html += ("<option>" + array_3[i] + "</option>");
                    }
                }

                $(this).find('span').append(
                    '<select id=' + dropdownId + ' class="dropdown-answers">' +
                    html +
                    '</select>'
                );
            }


            if (indexInc === 4) {
                array_4.push(uniqueShuffledAnswersArray_3[3], uniqueShuffledAnswersArray_3[10], uniqueShuffledAnswersArray_3[11])
                shuffle(array_4)
                let html = "";
                html += ("<option></option>")
                for (i = 0; i <= array_4.length; i++) {
                    if (array_4[i]) {
                        html += ("<option>" + array_4[i] + "</option>");
                    }
                }

                $(this).find('span').append(
                    '<select id=' + dropdownId + ' class="dropdown-answers">' +
                    html +
                    '</select>'
                );
            }
        });
    }, 201)


    // ON CLICK FUNCTIONALITY
    // Check Answers
    $("#check-answers").click(function () {
//         // reset values
        totalUnanswered = answersArray.length;
        $('.sentence span select').each(function (index) {
            var indexInc = index + 1;
            // Accessing answer in span and storing in answer variable
            var answer = $(this).find(':selected').text();
            var answerIndex = $(this).find(':selected').index();
//              alert(answer);
            // sotring each answer in answersArray
            this.style.borderColor = borderColorDefault;
            if (answerIndex == 0) {
//                  allAnswersSelected = false;
                this.style.borderColor = borderColorWrong;
            }
            if (answerIndex != 0) {
                totalUnanswered = totalUnanswered - 1;
            }
        });

        // Check if all options are selected, if yes then set its status to true
        if (totalUnanswered === 8) {

            $('.sentence span select').each(function (index) {
                var indexInc = index + 1;
                // Accessing answer in span and storing in answer variable
                var answer = $(this).find(':selected').text();
                var answerIndex = $(this).find(':selected').index();
//                  alert('selected answer: ' + answer + ', actual answer: '+ answersArray[index]);

                // sotring each answer in answersArray
                this.style.borderColor = borderColorDefault;
                if (answer == answersArray[index]) {
                    this.style.borderColor = borderColorRight;
                } else {
                    this.style.borderColor = borderColorWrong;
                }
            });

        } else {
            $('#message').css('color', colorRed);
            $('#message').text(messageOnUnselectedBlanks);
            $('#message').show();

        }
//
    });

    $("#show-answers").click(function () {
        $('.sentence span select').each(function (i, el) {
            $(el).val(answersArray[i]).change();
            $(el).css('borderColor', borderColorRight);
            $('#message').hide();
            allCheckAns = true
        });
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
        $.each(list, function (i, e) {
            if ($.inArray(e, result) == -1) result.push(e);
        });
        return result;
    }

    //this send the data to the index2
    $("#play-answers").click(function () {
        window.location.href = "index2.html?unit=" + sessionStorage.getItem('unitIframe');
        ;
        // $.ajax({
        //     type: 'GET',
        //     url: 'http://127.0.0.1:5500/4co/index2.html',
        //     data: { studentNumber: 7 },
        //     success: function(data)
        //     {
        //         console.log(data);
        //     }
        // });
    });

})(jQuery); // End of use strict

function refreshPage() {
    window.location.reload(true);
}

