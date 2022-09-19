const ONE_MINUTE = 60
const ONE_HOUR = ONE_MINUTE * 60
const FOUR_HOURS = ONE_HOUR * 4

export const createTimer = (state: any, setState: any, from: string) => {
  if (!isServer) {
    const timeChannel = new BroadcastChannel('time');
    timeChannel.onmessage = (e) => {
      if (e.data.from === 'timer' && e.data.to === from) {
        const now = Date.now()
        timeChannel.postMessage({ time: now, from })
        setState('timer', (total: any) => total + Math.abs(e.data.time - now) / 1000)
      }
    }
  }

  setInterval(() => {
    if (state.timer > ONE_HOUR - 100) {
      setState('level', state.level - 10)
      setState('timer', 0)
    }
  }, 5000)
}
