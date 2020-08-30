let surahs = [
  "001.mp3",
  "091.mp3",
  "092.mp3",
  "093.mp3",
  "094.mp3",
  "095.mp3",
  "096.mp3",
  "097.mp3",
  "098.mp3",
  "099.mp3",
  "100.mp3",
  "101.mp3",
  "102.mp3",
  "103.mp3",
  "104.mp3",
  "105.mp3",
  "106.mp3",
  "107.mp3",
  "108.mp3",
  "109.mp3",
  "110.mp3",
  "111.mp3",
  "112.mp3",
  "113.mp3",
  "114.mp3",
];

var navClass = <HTMLElement>document.createElement("div");
navClass.className = "navbar navbar-expand-sm navbar-light ";
var navitem1 = <HTMLElement>document.createElement("li");
navitem1.className = "nav-item";
var a1 = <HTMLAnchorElement>document.createElement("a");
a1.href = "index.html";
a1.innerText = "player";
var navitem2 = <HTMLElement>document.createElement("li");
navitem1.className = "nav-item";
var a2 = <HTMLAnchorElement>document.createElement("a");
a2.href = "page1.html";
a2.innerText = "playlist";
var navitem3 = <HTMLElement>document.createElement("li");
navitem3.className = "nav-item";
var a3 = <HTMLAnchorElement>document.createElement("a");
a3.href = "page2.html";
a3.innerText = "player";
navitem1.appendChild(a1);
navitem2.appendChild(a2);
navitem3.appendChild(a3);
navClass.append(navitem1, navitem2, navitem3);
document.body.appendChild(navClass);

var form = <HTMLFormElement>document.createElement("form");
var div1 = <HTMLDivElement>document.createElement("div");
div1.className = "form-group";
var songInput = <HTMLInputElement>document.createElement("input");
songInput.className = "form-control";
songInput.placeholder = "Enter URL...";
var btn1 = <HTMLButtonElement>document.createElement("button");
btn1.className = "btn btn-primary";
btn1.type = "button";
btn1.addEventListener("click", function () {
  generateSongs(songInput.value);
});

btn1.innerText = "submit";
div1.append(songInput, btn1);
form.appendChild(div1);
document.body.appendChild(form);
var div = <HTMLDivElement>document.createElement("div");
div.className = "container";
var audio1 = <HTMLAudioElement>document.createElement("audio");
audio1.controls = true;
audio1.autoplay= true;
audio1.id = "audio";
// var audioSource = <HTMLSourceElement>document.createElement("source");
// // audioSource.src=surahs[0];
// audioSource.type = "audio/mpeg";
// audio1.appendChild(audioSource);

document.body.append(div, audio1);

// var surahs =["001.mp3","091.mp3","092.mp3","093.mp3","094.mp3","095.mp3","096.mp3","097.mp3","098.mp3","099.mp3","100.mp3","101.mp3","102.mp3","103.mp3","104.mp3","105.mp3","106.mp3","107.mp3","108.mp3","109.mp3","110.mp3","111.mp3","112.mp3","113.mp3","114.mp3"];
var div2 = [];
var image = [];
var button = [];
var button1 =[];
var h4 =[];
for (let i = 0; i < surahs.length; i++) {
  div2[i] = document.createElement("div");
  div2[i].className = "card";
  div2[i].addEventListener("click", addToPlaylist);
   h4[i] =document.createElement("h4");
   h4[i].innerHTML=surahs[i];
  image[i] = document.createElement("img");
  image[i].className = "card-img-top";
  image[i].src = "audio.png";
  button[i] = document.createElement("button");
  button[i].innerHTML = "Play Song";
  button[i].className = "btn btn-primary";
  button[i].id = i;
  button[i].addEventListener("click", addSong);
  button1[i] =document.createElement("button");
  button1[i].className = "btn btn-info btn-lg";
  button1[i].innerHTML="+"+"Add Song";
  button1[i].addEventListener("click", addToPlaylist);
  div2[i].append(h4[i],image[i],button[i],button1[i]);
  div.appendChild(div2[i]);
}

function addToPlaylist(){

}
function addSong(event) {
  let surahId = surahs[event.srcElement.id];
  audio1.src = surahId;
//   console.log(audioSource.src);
}
// class Songs {
//   songContent: String;

//   async getSongList(search: String) {
//     let songList = await fetch(
//       `https://api.spotify.com/v1/search?q=`+search+`&type=album%2Cartist%2Cplaylist%2Ctrack&market=us`,
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer BQAGTZFj-BmLS4Z3qm87hZCUK1pEr6Nn5XwitnavzPO8Jzc6aesnLXeyWHPb2xxy4sdeyiSeicAo3ukcihl1183hpySsL7YIqV0X7HV9uwqWTM_CtVnAPhjY638_Ly-0Q3YDH1dTLQjJAlfYzoLvXxTg8_DEalrD3qEPkaOjW_OCoxfCXdLRJQbzcqeidfUQFjeFbWDwgw081UgQLZVM-UfEgK4f9a92CzLrNGLro-zz0lb1wgfoRBkfDA1FkF6HwK9CsL5SzwEtB8-ZabgyAzj9t4wnX18lPB_Q",
//         },
//       }
//     );
//     let songJson = await songList.json();
//     var data = await songJson.artists;
//     console.log(data);
//     for(let i=0;i<data.length;i++){
//           var songcard =<HTMLDivElement>document.createElement("div");
//           var audio =<HTMLAudioElement>document.createElement("audio");
//     }
//     //     for()
//     return data;
//     // await console.log(data);
//   }
// }

function generateSongs(songname) {
  audio1.src = songname;

  //   var song = new Songs();
  //   let list = song.getSongList(songname);
  //   let list = song
  //     .getSongList(songname)
  //     .then((data) => data)
  //     .catch((err) => console.log(err));
  //   console.log(list);
}
