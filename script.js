const API_KEY = "PASTE_YOUR_API_KEY_HERE";
const CHANNEL_ID = "UCXKL9jNQ6M6js7Q4s4uJHLg";

async function loadVideos(){
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=9`
  );
  const data = await res.json();
  const grid = document.getElementById("videoGrid");

  data.items.forEach(item=>{
    if(item.id.videoId){
      const div = document.createElement("div");
      div.className="card";
      div.innerHTML = `
        <img src="${item.snippet.thumbnails.high.url}">
        <p>${item.snippet.title}</p>
      `;
      grid.appendChild(div);
    }
  });
}
loadVideos();
