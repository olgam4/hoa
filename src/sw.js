import { precacheAndRoute } from 'workbox-precaching'
importScripts('localforage.min.js');

precacheAndRoute(self.__WB_MANIFEST)

const timeChannel = new BroadcastChannel('time');

setInterval(async function() {
  const lastResponse = await localforage.getItem('lastResponse');
  timeChannel.postMessage({ from: 'timer', time: lastResponse });
}, 5000);

timeChannel.onmessage = async function(event) {
  if (event.data.from !== 'timer') {
    localforage.setItem('lastResponse', event.data.time);
  }
};


