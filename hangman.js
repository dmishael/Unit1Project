/*
Pseudocode:
Possible themes:

Grateful Dead themed hangman? 
skeleton hanging? the goal is to make the dead, grateful (the skeleton is a dead Jerry Garcia and getting the word 
    right brings his flesh back on to his bones)
the words can be names of songs or lyrics 
life bar is the wall of sound
Jerry is 'hanging' on stage with the rest of the Dead
the keys are the audiance in the 'pit' 


MVP:

-layout web page with css grid and flexbox so it is responsive
-set up the title and supporting text
-set up a responsive keyboard illustrating each letter of the alphabet
- In html create divs containing each letter of the alphabet
- set clickable buttons in the form of a keyboard on page displaying the divs
- In html create a div for the empty tag containing the new "secret word"
- set up library of random theme related words. Start with a few, can add more later
set function for showing the clicked letter, IF correct, in the CONTAINER of the secret word
set animation or transition for clicking action on keyboard
set event for new background color of key button after letter clicked (greyed out)
set function for positive sound IF letter is correct and negative sound IF incorrect
set function for adding a body limb to IMG OF JERRY (maybe revealing part of an existing image) IF incorrect
set function for decreasing part of sound(or volume) bar IF incorrect
set function for animation IF the word is complete and Jerry is alive
set function for animation IF Jerry has all of his/her limbs and hung
add button to restart

https://www.pinterest.com/pin/329677635220872061/visual-search/?x=11&y=10&w=272&h=561
https://www.google.com/search?q=wall+of+sound&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi8st3E55_fAhWDhOAKHbLVBlQQ_AUIDigB&biw=1436&bih=688#imgrc=dd8tDCPVtdrP3M:


Nice to haves:
selects the song of the secret word (the song which contains the lyric or the name of the song) to play in the back
set function and possible animation for when the human has all of his/her limbs (JERRY TURNS INTO 70'S JERRY AND 
THE DEAD JOIN HIM ON STAGE AND *RIPPLE* PLAYS

*/

let a = $('#a')
let b = $('#b')
let c = $('#c')
let d = $('#d')
let e = $('#e')
let f = $('#f')
let g = $('#g')
let h = $('#h')
let i = $('#i')
let j = $('#j')
let k = $('#k')
let l = $('#l')
let m = $('#m')
let n = $('#n')
let o = $('#o')
let p = $('#p')
let q = $('#q')
let r = $('#r')
let s = $('#s')
let t = $('#t')
let u = $('#u')
let v = $('#v')
let w = $('#w')
let x = $('#x')
let y = $('#y')
let z = $('#z')

//library of secret words

let libraryArray = ["RIPPLE", "DEAL", "BERTHA", "ST STEPHEN", "CHINA CAT", "WHARF RAT", "CASSIDY", "FRANKLINS TOWER", "BOX OF RAIN", "JACK STRAW", "GOOD LOVIN", "LET IT GROW", "EL PASO", "SLIPKNOT", "SPACE", "DRUMS", "THE OTHER ONE", "STELLA BLUE", "US BLUES", "LOOSE LUCY", "MAMA TRIED", "ROW JIMMY", "LOSER", "COSMIC CHARLIE"]

//randomly generated secret word

let secretWord = libraryArray[Math.floor(Math.random() * libraryArray.length)]
let wordArray = []

// click variable stores number of clicks

let clicks = 0
// for (i = 0; i < secretWord.lenth; i++) {
//     wordArray.push("_")
// }



//for loop placeing "_" the amount of times of the length of the secret word.

$("#start").on('click', function(){
    $("#secretWord").html(secretWord)
    if (wordArray.length < secretWord.length){
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === " ") {
            wordArray.push(" ")
        } else {
            wordArray.push(" _ ")
        }
}
// on click I want to reveal the created wordArray so user can see how many charachters are in the word
    $("#revealedWord").html(wordArray).css("visibility","visible")
    
}})

//set function for showing the clicked letter, if correct, in the CONTAINER of the secret word

$(".key1, .key2, .key3").on('click', function () {
    let selectedLetter = $(this).text()
    let index = secretWord.indexOf(selectedLetter)
    $(this).css("background-color","grey")
    if (index > -1) {

        // function for if a duplicate letter in a word
    for (let index2 = index; index2 < secretWord.length; index2++) {
        if (secretWord[index2] == wordArray[index])
        wordArray[index2] = selectedLetter
        wordArray[index] = selectedLetter
        if (secretWord[index2] != wordArray[index])
        wordArray[index] = selectedLetter
    }
    
    $("#revealedWord").html(wordArray)
    }

    // add body parts if wrong
    if (index <= -1) {
        clicks += 1
        //css part
    }
    if (clicks === 1){ 
        $("#skeleton-head").css("visibility","visible")
        }
        if (clicks === 2){ 
            $("#skeleton-torso").css("visibility","visible")
            }
            if (clicks === 3){ 
                $("#skeleton-right-arm").css("visibility","visible")
                }
                if (clicks === 4){ 
                    $("#skeleton-left-arm").css("visibility","visible")
                    }
                    if (clicks === 5){ 
                        $("#skeleton-left-leg").css("visibility","visible")
                        }
                        if (clicks === 6){ 
                            $("#skeleton-right-leg").css("visibility","visible")
                            }
    
    // set game over notification
                            if (clicks > 5){ 
        $("#Lose").css("visibility","visible")
        $("#revealedWord").css("visibility","hidden")
       
    }

    // set winning screen 
    if (wordArray.join('') == secretWord){
        $("#Jerry-for-the-win").css("visibility","visible")
        $("#Thanks").css("visibility","visible")
        $("#Noose").css("visibility","hidden")
        $("#skeleton-head").css("visibility","hidden")
        $("#skeleton-torso").css("visibility","hidden")
        $("#skeleton-right-arm").css("visibility","hidden")
        $("#skeleton-left-arm").css("visibility","hidden")
        $("#skeleton-left-leg").css("visibility","hidden")
        $("#skeleton-right-leg").css("visibility","hidden")
        $("#Jerry-for-the-win").css("visibility","visible")
        $("#Description").css("visibility","hidden")
        $("#revealedWord").css("visibility","hidden")
        $("#Lose").css("visibility","hidden")
    } 
 })


// if selected letter is in the secretWord put that letter in the position of that word into the array. 
// if the array there is space between the letters 



   // let correctLetter = secretWord.substring(0,1)
    // correctLetter.style.color = "black"
    // alert(correctLetter)

// $('#header')[1].css('color','red')



// $("secretWord"[1]).css("color", "blue")


// $(".keyboard").on('click', function(){
//     if((".keyboard").text() === "U")
//     $("#revealedWord").html(secretWord).css("color", "black")
// })

// $(".key1").on('click', function(){
        
//             $("#revealedWord")().css("color", "black")
//             else $("#revealedWord")().css("color", "green")
//         }})
//     for (i = 0; lenth < length.libraryArray; i++) {

//     }


/*
IF NEW WAY DOESN'T WORK
$(".key1, .key2, .key3").on('click', function () {
    let selectedLetter = $(this).text()
    let iX = secretWord.indexOf(selectedLetter)
    wordArray[iX] = selectedLetter
    // if (wordArray.length < secretWord.lenth) {
    //     for (
    // }
    $("#revealedWord").html(wordArray)  
 })
*/