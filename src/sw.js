import { precacheAndRoute } from 'workbox-precaching'
importScripts('localforage.min.js');

precacheAndRoute(self.__WB_MANIFEST)

const timeChannel = new BroadcastChannel('time');

setInterval(async function() {
  timeChannel.postMessage({ from: 'timer', time: await localforage.getItem('last_response') });
}, 5000);

timeChannel.onmessage = function(event) {
  if (event.data.from === "client") {
    localforage.setItem('last_response', event.data.time);
  }
};


