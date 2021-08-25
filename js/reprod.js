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



// const canciones = [
//     "song1",
//     "song2",
//     "song3"
// ]

// var indiceActual = new Array(1)

// //Funcion para crear mediante javascript el listado de canciones
// function crearPlayList(){
// 	const listado = document.createElement('ol')
// 	listado.setAttribute("id", 'listadoMusica')
// 	for (let i = 0; i<canciones.length; i++){
// 		const item = document.createElement('li')
// 		item.appendChild(document.createTextNode(canciones[i])) 
// 		item.setAttribute("id", canciones.indexOf(canciones[i]))
// 		listado.appendChild(item)
// 	}
// 	return listado
// }
// document.getElementById('playList').appendChild(crearPlayList())

// function removeActive(e) {
//     if (document.querySelector('#navList a.active') !== null) {
//       document.querySelector('#navList a.active').classList.remove('active');
//     }
//     e.target.className = "active";
//   }

// var listadoMusica= document.getElementById('listadoMusica')
// listadoMusica.onclick = (e) =>{
// 	const itemClick = e.target
// 	removeActive()
// 	itemClick.classList.add("active");
// 	reproduccionActual("Reproduciendo: "+ itemClick.innerText)
// 	loadMusic(itemClick.innerText)
// 	player.play()
// 	indiceActual[0]= e.target.id
// 	classIconPlay();
 
// }
// //Funcion para reproducir la proxima cancion
// function nextMusic(){  
// 	const source = document.getElementById('source');
// 	var musicaActual= Number(indiceActual[0]);
// 	if (canciones.length == (musicaActual+1)){
// 		var siguiente = 0
// 	} else {
// 		var siguiente = musicaActual + 1
// 	}
// 	removeActive()
// 	var item=document.getElementById(siguiente)
// 	item.classList.add("active");
// 	loadMusic(canciones[siguiente]);
// 	player.play()
// 	indiceActual[0]= siguiente
// 	reproduccionActual("Reproduciendo: "+ canciones[siguiente])
// 	classIconPlay()
// }
// //Funcion para reproducir la cancion anterior
// function prevMusic(){  
// 	const source = document.getElementById('source');
// 	var musicaActual= Number(indiceActual[0]);
// 	if (musicaActual==0){
// 		var anterior= canciones.length - 1
// 	} else {
// 		var anterior = musicaActual - 1
// 	}
// 	removeActive()
// 	var item=document.getElementById(anterior)
// 	item.classList.add("active");
// 	loadMusic(canciones[anterior]);
// 	player.play()
// 	indiceActual[0]= anterior
// 	reproduccionActual("Reproduciendo: "+ canciones[anterior])
// 	classIconPlay()
// }
// //Funcion para remover todas las clases css activas
// function removeActive(){
// 	var elems = document.querySelectorAll(".active");
//  	 [].forEach.call(elems, function(el) {
//     	el.classList.remove("active");
//  	 });
//  	 return elems
// }

// //Funcion para cargar las canciones en el reproductor
// function loadMusic(ruta){
// 	var source = document.getElementById('source')
// 	var folder ="media";//Carpeta donde tenemos almancenada la musica
// 	source.src= folder+"/"+ruta
// 	var index= indiceActual[0]= canciones.indexOf(ruta)
// 	removeActive()
// 	var item=document.getElementById(index)
// 	item.classList.add("active");
// 	reproduccionActual("Reproduciendo: "+ ruta)
// 	player.load()
// }

// //Funcion para pausar o darle play 
// function togglePlay() {
// 	if (player.paused){
// 		toggleIcon();
// 		return player.play();
// 	} else {
// 		toggleIcon();
// 		return player.pause();
// 	}
// }

// //Funcion para cambiar el icono play o pause
// function toggleIcon() {
//     var element = document.getElementById("iconPlay");
//     element.classList.toggle("fa-pause-circle");
//     element.classList.toggle("fa-play-circle");
//  }