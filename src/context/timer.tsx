import type { FlowComponent } from 'solid-js'

export const TimerContext = createContext([{
  timer: 0,
}])

export const TimerProvider: FlowComponent = (props) => {
  const [state, setState] = createStore({
    timer: 0,
  })
  
  if (!isServer) {
    const timeChannel = new BroadcastChannel('time');
    timeChannel.onmessage = (e) => {
      if (e.data.from === 'timer') {
        const now = Date.now()
        timeChannel.postMessage({ time: now, from: 'client' })
        setState('timer', now)
      }
    }
  }

  return (
    <TimerContext.Provider value={[state]}>
      {props.children}
    </TimerContext.Provider>
  )
}
