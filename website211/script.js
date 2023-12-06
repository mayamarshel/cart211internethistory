
let myHTML = "hello world";
const soundFile = new Audio("sounds/arcadesound.wav");
let interval = setInterval(movePicture, 20);

let positionOffset = 0

let horizontalOffset = 0;
let verticalOffset = 0;

let rightKey = false;
let leftKey = false;
let upKey = false;
let downKey = false;

document.addEventListener("keydown",keyDownListener);
document.addEventListener("keyup",keyUpListener);


function keyDownListener(event){

    if(event.keyCode == 68){
        rightKey = true;
    }
    if (event.keyCode == 87){
        upKey = true;
    }
    if (event.keyCode == 83){
        downKey = true;
    }
    if (event.keyCode == 65)
    {
        leftKey = true;
    }


//effecting all elements of a class
//using getElementByClassNames=
    if (event.keyCode == 16) {
       let array = document.getElementsByClassName("header");

       //changes color in 2nd element of array
     // array[1].style.backgroundColor = "#000000"

       //would change the element to the number 12 if it was an array of numbers
     // array[2] = 12;

       for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = "rgb(0, 0, 0)";
       }
    }


}

function keyUpListener(event){

    if (event.keyCode == 68)
    {
        rightKey = false;
    }

    if (event.keyCode == 87)
    {
        upKey = false;
    }

    if (event.keyCode == 83)
    {
        downKey = false;
    }

    if (event.keyCode == 65)
    {
        leftKey = false;
    }

}


//adding it as a function and adding swap allows you to go back between text states instead of just changing it once 

function myFunction(){
    soundFile.play();

    let swap = document.getElementById("backgroundcredit").innerHTML;
// accessing the html file and accessing element and putting in ID name as the parameter
// everything before = the element and then the innerHTML part is the code after the element is names in the HTML document
    document.getElementById("backgroundcredit").innerHTML = myHTML;
    myHTML = swap;
   // document.getElementById("ID of the element to be changed").innerHTML = "what you want it to change to";
   //you can make multiple elements change by putting them all in the same function (myFunction) and then usuing the same OnClick in the HTML code
   //innerHTML = the text inside of a div (use to switch text)
   //src = the source of the image (use to switch images)
   //document.getElementById("backgroundcredit").style.display = "none";
   //what is called background-color in css would be backgroundColor in JS

}

function movePicture(){
    document.getElementById("hilma1").style.left = positionOffset + "px";
    positionOffset = positionOffset + 3;
    
    if (positionOffset >= 300){
      clearInterval(interval)
    }
}



function movePicture() {
        
    if(rightKey){
        // changes the left horizontal offset in the CSS code
        document.getElementById("moveimage").style.left = horizontalOffset + "px";
        if ( horizontalOffset <= width) {
            horizontalOffset +=10;
        }
        else{
            horizontalOffset = 0
        }
    }

    if(leftKey){
        document.getElementById("moveimage").style.left = horizontalOffset + "px";
            if ( horizontalOffset >= 0) {
                horizontalOffset -=10;
            }
            else{
                horizontalOffset = 500
            }
        }
        
    if(upKey){
        document.getElementById("moveimage").style.top = verticalOffset + "px";
                if ( verticalOffset >= 0) {
                    verticalOffset -=10;
                }
                else{
                    verticalOffset = 500
                }
        }
        
    if(downKey){
        document.getElementById("moveimage").style.top = verticalOffset + "px";        
                    if ( verticalOffset <= 500) {
                        verticalOffset +=10;
                    }
                    else{
                        verticalOffset = 0
                    }
        }

        
        
        }

