//HAMBURGER BAR

$(document).ready(function(){

$("#burger-container").click(function(){
$(this).toggleClass("open");
$('#slide').toggle();
});

$('#slide li a').click(function(){
$('#slide').hide();
$('#burger-container').toggleClass("open");
});

if ($(window).width()>768) {
$('#slide').hide();
}
});

$(window).resize(function(){
if ($(window).width()>768) {
$('#slide').hide();
$('#burger-container').removeClass("open");
}
});

//POP-UP

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//POP-UP INPUT

function setDisplay(span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('input-popup');

// Get the button that opens the modal
var Btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("submit");

// When the user clicks the button, open the modal 
if (Btn){
	Btn.onclick = function() {
    modal.style.display = "block";
	}
}

// When the user clicks on <span> (x), close the modal
[].forEach.call(spans, setDisplay);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// BACK button

function goBack() {
    window.history.back();
}




