document$.subscribe(function() {
    startMusic();
})

function startMusic(){
    let d = document.getElementsByClassName("music");
    [d]?.map((o)=>{
        o = o[0];
        if (spotifyapi){
            let options = {
                width: '100%',
                height: "80px",
                "border-radius": '10px',
                uri: o?.dataset.spotify
            };
            let callback = (EmbedController) => {};
            spotifyapi.createController(o, options, callback);
            musicStarted = true;
            o.style.backgroundColor = "transparent";
            o.frameBorder = "0";
            o.allowTransparency="true";
        }
    });
}

let spotifyapi = null;
let musicStarted = false;

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    spotifyapi = IFrameAPI;
    if (!musicStarted) { startMusic(); }
  };