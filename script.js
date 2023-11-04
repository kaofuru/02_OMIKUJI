console.log("welcome to Spotify");

// ランダムに並び替え


    
   

    $(function () {
        const bool = [1, -1];
        $("ul").html(
            $("li").sort(function (a, b) {
                return bool[Math.floor(Math.random() * bool.length)];
            })
        );
    
    });

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("btn").addEventListener("click", function () {
        window.location.reload();
    })
});













//Initialize the Variable
let songIndex = 0;
let audioElement = new Audio("./song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
    
let songs = [
    { songName: "Pika - Pika", filePath: "./song/1.mp3", coverPath:"./img/IMG_01.png"},
    { songName: "Alien3", filePath: "./song/2.mp3", coverPath:"./covers/IMG_07.png"},
    { songName: "BadMan", filePath: "./song/3.mp3", coverPath:"./covers/IMG_08.png"},
    { songName: "Carrot", filePath: "./song/4.mp3", coverPath:"./covers/IMG_10.png"},
    { songName: "Happy Robot ", filePath: "./song/5.mp3", coverPath:"./covers/IMG_11.png"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener("click", function(){ 
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", () => { 
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
     })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) =>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = "song/3.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

    })
})