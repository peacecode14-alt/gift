const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const againBtn = document.getElementById("againBtn");

const music = document.getElementById("music");
const fireSound = document.getElementById("fireSound");

const count = document.getElementById("count");

const photo = document.getElementById("photo");
const photoCounter = document.getElementById("photoCounter");

const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");


const photos = [

    "img/2.jpg",
    "img/1.jpeg",
    "img/3.jpeg",
    "img/4.jpeg"

];



const message = `

  Dear Eng Amira ❤️

 Happy Birthday Eng Amira 👑


  I wish you endless happiness, success and beautiful memories. 
 
 
  May every dream you have come true. 
 
  Keep smiling, because your smile lights up the world. 
 
 ❤️`;
;


function sleep(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}

function show(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    document
        .getElementById(id)
        .classList
        .add("active");

}



startBtn.onclick = async ()=>{

    music.play().catch(()=>{});

    show("countdown");

    for(let i=3;i>=1;i--){

        count.innerHTML=i;

        await sleep(1000);

    }

    show("gallery");

    for(let i=0;i<photos.length;i++){

        photo.style.opacity=0;

        await sleep(400);

        photo.src=photos[i];

        photoCounter.innerHTML=
        `${i+1} / ${photos.length}`;

        photo.style.opacity=1;

        photo.style.transform="scale(1.05)";

        await sleep(2200);

        photo.style.transform="scale(1)";

    }

    show("envelopeSection");

};



let opened=false;

envelope.onclick=()=>{

    if(opened) return;

    opened=true;

    flap.style.transform="rotateX(180deg)";

    setTimeout(()=>{

        flap.style.zIndex="1";

        createLetter();

    },700);

};


function createLetter(){

    const letter = document.createElement("div");

    letter.className = "letter";

    letter.innerHTML = `
        <h2>Happy Birthday ❤️</h2>
        <div id="typedText"></div>
    `;

    envelope.appendChild(letter);

    setTimeout(()=>{

        letter.classList.add("show");

        setTimeout(()=>{

            typeMessage(
                letter.querySelector("#typedText")
            );

        },900);

    },100);

}



function typeMessage(container){

    let i = 0;

    const timer = setInterval(()=>{

        container.innerHTML += message.charAt(i);
        container.parentElement.scrollTop =
        container.parentElement.scrollHeight;

        i++;

        if(i >= message.length){

            clearInterval(timer);

            setTimeout(finishGift,2000);

        }

    },35);

}



function finishGift(){

    show("final");

       fireworkEffect();

}



function fireworkEffect(){

    if(fireSound){

        fireSound.currentTime = 0;

        fireSound.play().catch(()=>{});

    }

    let count = 0;

    const timer = setInterval(()=>{

        confetti({

            particleCount:140,

            spread:120,

            startVelocity:55,

            origin:{

                x:Math.random(),

                y:Math.random()*0.5

            }

        });

        count++;

        if(count >= 8){

            clearInterval(timer);

        }

    },600);

}



againBtn.onclick = ()=>{

    location.reload();

};



setInterval(()=>{

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize =
        (18+Math.random()*18)+"px";

    heart.style.animationDuration =
        (5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

},350);



setInterval(()=>{

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
        (6+Math.random()*4)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

},700);