'use strict';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const playerCurrentTime = 'videoplayer-current-time';

let timeStamp = 0;
const storedTime = localStorage.getItem(playerCurrentTime);
if (storedTime) {
  player.setCurrentTime(storedTime);
}

player.on(
  'timeupdate',
  throttle(data => {
    timeStamp = data['seconds'];
    localStorage.setItem(playerCurrentTime, timeStamp);
    console.log(timeStamp);
  }, 1000)
);
