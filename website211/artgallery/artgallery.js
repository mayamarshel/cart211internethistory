let hilma = "Hilma af Klint created conventional work throughout her life time for income but\ncreated deeply spiritual pieces on the side. It wasn’t until 20 years after her death that\nher spiritual abstract work was recognized in academic circles. In 2018,  ‘Hilma af Klint: Paintings for the Future’ \nat the Guggenheim museum in New York became the Guggenheims most attended exhibition.         She began her work before western abstract art was identified as 'legitimate art'. After exhibiting her work to Rudolf Steiner, a known art critic, she went on a four year painting haiatus, suggesting her work was not appreciated by the art world. Despite being unknown for years Klint was painting modern abstraction before Wassily Kandinsky, one of the 'first' and most famous abstract impressionists. ";

let kusama = "Yayoi Kusama was a long standing political activist as well as artist. In the 1960s she climbed the Brookland Bridge covered in poka dots (her staple pattern featured in lots of her art) to protests the Vietnam War and consequently the effects of greed and capitalism on the world. She immigrated from Japan in 1957 to follow her art dreams in the United States. Her work as a political activist, often involving nudity as an ode to the free love movement of the 60's, turned her family and hometown of Matsumoto against her. Decades later, having become one of the most famous living female artists to date, there is a museum dedicated to her in the middle of Matsumoto"

let ferrari = "'Art is not beauty or novelty; art is effectiveness and disruption.'   - Ferrari            Ferrari was born in Argentina in 1920, living through harsh miltaristic political regimes. He was exhiled to Brazil in 1976 because of the political nature of his work. His son, Ariel Ferrari decided to stay in Argentina was later kidnapped by the dictatorship and murdered. His art often has a disturbing or grotesque nature which aims to show the innately putrid nature of violence in the modern era. He especially speaks out against powerful regimes like the United States or the Argentinian dictatorship, both of which to him are powerful abusers. "

const soundFile = new Audio("sounds/sparklesound.mp3");


// code for if you wanted to put a little sprite on the mouse 
document.onmousemove = (event) => {
    const {
        clientX,
        clientY
    } = event
    console.log(clientX, clientY)
}

function myFunction(){
    soundFile.play();
    let swap = document.getElementById("hilmaBio").innerHTML;
    document.getElementById("hilmaBio").innerHTML = hilma;
    hilma = swap;
}

function myFunctionKusama(){
    soundFile.play();
    let swap = document.getElementById("kusamaBio").innerHTML;
    document.getElementById("kusamaBio").innerHTML = kusama;
    kusama = swap;
}

function myFunctionFerrari(){
    soundFile.play();
    let swap = document.getElementById("ferrariBio").innerHTML;
    document.getElementById("ferrariBio").innerHTML = ferrari;
    ferrari = swap;
}