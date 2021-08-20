const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

function pasarCancion(){
    document.getElementById('song').src="./media/song2.mp3";
}

playPause.addEventListener("click", () => {
    if (audio.paused || audio.ended){
        playPause.querySelector('.pause-btn').classList.toggle('hide');
        playPause.querySelector('.play-btn').classList.toggle('hide');
        audio.play();
    } else {
        audio.pause();
        playPause.querySelector('.pause-btn').classList.toggle('hide');
        playPause.querySelector('.play-btn').classList.toggle('hide');
    }
});



// let previus = document.querySelector('#back');
// let next = document.querySelector('#next');
// let track_image = document.querySelector('#back');




// let track = document.createElement('song');

// let index_no = 0;
// let playing_song = false;

// let All_song = [
//     {
//         name: "ThundersTruck",
//         path: "./media/song.mp3",


//     },
//     {
//         name: "Back in Black",
//         path: "./media/song.mp3",


//     },
//     {
//         name: "Highway to Hell",
//         path: "./media/song.mp3",


//     }
// ];

// function load_track(index_no){
//     track.src = All_song[index_no].path;
//     track.load();
// }
// load_track(index_no);