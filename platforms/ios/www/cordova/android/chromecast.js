!function(){function e(e){return{name:e.name,id:e.id,playerName:n,playableMediaTypes:["Audio","Video"],isLocalPlayer:!1,appName:n,deviceName:e.name,supportedCommands:["VolumeUp","VolumeDown","Mute","Unmute","ToggleMute","SetVolume","SetAudioStreamIndex","SetSubtitleStreamIndex","DisplayContent","SetRepeatMode","EndSession"]}}function t(){return Promise.resolve(chrome.cast.getRouteList().map(e))}function a(e){return chrome.cast.connectToId(e.id)}function o(e){var o=e.detail.player;o.getTargets=t,o.tryPair=a}var n="Chromecast";MainActivity.supportsPlayStore()&&(document.addEventListener("chromecastloaded",o),require(["scripts/chromecast"]))}();