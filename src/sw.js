import { precacheAndRoute } from 'workbox-precaching'
importScripts('localforage.min.js');

precacheAndRoute(self.__WB_MANIFEST)

const timeChannel = new BroadcastChannel('time');

setInterval(async function() {
  const lastResponse = JSON.parse(await localforage.getItem('last_response'));
  timeChannel.postMessage({ from: 'timer', to: lastResponse.from, time: lastResponse.time});
}, 5000);

timeChannel.onmessage = function(event) {
  if (event.data.from !== 'timer') {
    localforage.setItem('last_response', JSON.stringify({ time: event.data.time, from: event.data.from }));
  }
};


