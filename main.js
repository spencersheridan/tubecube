//JS FILE WOOhoo

      //YOUTUBE API stuff
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var id = 'dbikl6RDlVU';

  var options = {
    height: '360',
    width: '640',
    volume: 0,
    playerVars: {
      'enablejsapi': 1,
      'controls': 1,
      'fs': 0,
      showinfo: 0,
      autoplay: 1,
      loop: 1,
      playlist: id,
      playsinline: 1,
      rel: 0
    },
    videoId: id,
    events: {
      'onReady': function(e) {
        e.target.mute();
      }
    }
  };

function onYouTubeIframeAPIReady() {
  
  front = new YT.Player('front', options);
  right = new YT.Player('right', options);
  left = new YT.Player('left', options);
  back = new YT.Player('back', options);
}
