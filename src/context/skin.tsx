import type { FlowComponent } from 'solid-js'

const baseSkin = [
  {
    current: () => 'cat',
  },
  {
    next: () => {},
    prev: () => {},
  },
]

export const SkinContext = createContext(baseSkin)

type Props = {
  index?: number
}

const Skins = ['cat', 'biche']

export const SkinProvider: FlowComponent<Props> = (props) => {
  const [state, setState] = createStore({
    index: props.index || 0,
  })

  const value = [
    {
      current: createMemo(() => Skins[state.index]),
    },
    {
      next: () => {
        setState('index', (index) => {
          return index + 1 >= Skins.length ? 0 : index + 1
        })
      },
      prev: () => {
        setState('index', (index) => {
          return index - 1 < 0 ? Skins.length - 1 : index - 1
        })
      },
    },
  ] as typeof baseSkin

  return (
    <SkinContext.Provider value={value}>
      {props.children}
    </SkinContext.Provider>
  )
}
