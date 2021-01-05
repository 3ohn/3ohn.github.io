var oldEl = null;
var oldEl2 = null;

// Use for setting the iframe and the unit
function setIframe(link,type,unit){
    $(".iframe-src").attr('src',link);
    $("#testTypeTemplate").val(type);
    $("#testUnitTemplate").val(unit);
    
    //set up for the back and next
    if(type == "1vo"){
        $("#navType").val(0);
    }else if(type == "2gr"){
        $("#navType").val(1);
    }else if(type == "3gr"){
        $("#navType").val(2);       
    }else if(type == "4co"){
        $("#navType").val(3);       
    }else if(type == "5li"){
        $("#navType").val(4);        
    }else if(type == "6to"){
        $("#navType").val(5);        
    }
    // set the unit for back and next
    $("#navUnit").val(unit-1);

    setTimeout(function(){
        var iframe = document.getElementById("iframe-src2");
        iframe.contentWindow.postMessage(unit,window.location.origin);
    },200)
}

function goBack() {
    var type = $("#navType").val();
    var unit = $("#navUnit").val();

    if(unit != 0 || type != 0){
        if(type == 0){
            unit = parseInt(unit)-1;
            type = 5;
        }else{
            type = parseInt(type)-1;
        }

        $("#navType").val(type);
        $("#navUnit").val(unit);
        
    }else {
        alert("This is the beginning of the lesson");
    }

    $("#navType").val(type);
    $("#navUnit").val(unit);

    var link = null;
    if(parseInt(type) == 0){
        link = "./1vo";
    }else if(parseInt(type) == 1){
        link = "./2gr";
    }else if(parseInt(type) == 2){
        link = "./3gr";
    }else if(parseInt(type) == 3){
        link = "./4co";
    }else if(parseInt(type) == 4){
        link = "./5li";    
    }else if(parseInt(type) == 5){
        link = "./6to";       
    }

    $(".iframe-src").attr('src',link);
    setTimeout(function(){
        var iframe = document.getElementById("iframe-src2");
        iframe.contentWindow.postMessage((parseInt(unit)+1),window.location.origin);
    },200)
}

function goForward() {
    var type = $("#navType").val();
    var unit = $("#navUnit").val();
    type = parseInt(type)+1;
    if(type > 5){
        unit = parseInt(unit)+1;
        type = 0;
    }
    
    if(unit > 11){
        unit = 11;
        type = 5;
        alert("end of the lesson");
    }

    $("#navType").val(type);
    $("#navUnit").val(unit);

    var link = null;
    if(parseInt(type) == 0){
        link = "./1vo";
    }else if(parseInt(type) == 1){
        link = "./2gr";
    }else if(parseInt(type) == 2){
        link = "./3gr";
    }else if(parseInt(type) == 3){
        link = "./4co";
    }else if(parseInt(type) == 4){
        link = "./5li";    
    }else if(parseInt(type) == 5){
        link = "./6to";       
    }

    $(".iframe-src").attr('src',link);
    setTimeout(function(){
        var iframe = document.getElementById("iframe-src2");
        iframe.contentWindow.postMessage((parseInt(unit)+1),window.location.origin);
    },200)
}

$(".typeHeader").click(function() {
    // manage the unit zone
    var el = $(this)[0].children[2];
    if(oldEl != el){
        $(el).toggle();
        $(oldEl).css('display','none');
        oldEl = el;
    }else{
        $(el).toggle();
        oldEl = el;
    }

    // manage colr
    var el2 = $(this)[0].children[0];
    if(oldEl2 != el2){
        $(el2).css('color','green');
        $(oldEl2).css('color','black');
        oldEl2 = el2;
    }else{
        $(el2).css('color','black');
        oldEl2 = el2;
    }

    
});

$(".mobileMenuButton").click(function() {
    $(".unitMobile").toggle();
});



